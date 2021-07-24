import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  itemDiv: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 0",
    justifyContent: "center",
  },
  sliderGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
  },
  filterDiv: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    alignItems: "center",
    height: "fit-content"
    // height: "35vmin",
    // [theme.breakpoints.down("sm")]: {
    //   height: "25.5vmax",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   height: "55vmin",
    // },
  },
}));
