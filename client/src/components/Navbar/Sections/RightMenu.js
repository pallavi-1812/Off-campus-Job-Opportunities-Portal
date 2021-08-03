import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { LOGOUT } from "../../../constants/actionTypes";
import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, ListItem, ListItemIcon, ListItemText, Button, IconButton, Avatar } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "./styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const RightMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setAnchorEl(null);
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      {user ? (
        <>
          <IconButton className={classes.icon} aria-controls="customized-menu" aria-haspopup="true" variant="contained" onClick={handleClick}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} color="primary">
              {user.result.name.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>
          <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary={user.result.name} />
            </MenuItem>
            <StyledMenuItem className={classes.button} button onClick={logout}>
              <ListItemIcon>
                <PowerSettingsNewIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </StyledMenuItem>
          </StyledMenu>
        </>
      ) : (
        <div>
          <Button variant="contained" color="primary" component={Link} to="/auth">
            Sign in
          </Button>
        </div>
      )}
    </>
  );
};
export default RightMenu;
