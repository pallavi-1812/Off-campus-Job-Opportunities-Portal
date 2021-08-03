import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  icon: {
    padding: "0",
  },
  button: {},
}));
