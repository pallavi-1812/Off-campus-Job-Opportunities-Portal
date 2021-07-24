import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "10px",
  },
  searchBar: {
    padding: "0 8rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 4rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  },
  root1: {
    minWidth: 0,
    margin: theme.spacing(0.1),
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    padding: "10px",
  },
  root: {
    flexGrow: 1,
  },
}));
