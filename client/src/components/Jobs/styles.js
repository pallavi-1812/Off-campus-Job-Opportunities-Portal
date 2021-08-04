import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "1.5rem 8rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "1.5rem 4rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem 0",
    },
    loading: {
      marginLeft: "20px",
    },
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}));
