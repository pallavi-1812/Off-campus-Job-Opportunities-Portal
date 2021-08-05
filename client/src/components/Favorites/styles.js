import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
    },
  },
  root1: {
    minWidth: 0,
    margin: theme.spacing(0.1),
  },
  paper: {
    padding: "0",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  fullGrid: {
    marginTop: 0,
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  dialogWrapper: {
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    position: "absolute",
    height: "90vh",
    width: "70vw",
    top: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "95vw",
    },
  },
  dialogTitle: {
    paddingRight: theme.spacing(1),
  },
  dialogContent: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
}));
