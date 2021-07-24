import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "0px",
    right: "0px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0",
  },
  title: {
    padding: "10px",
  },
  cardActions: {
    display: "flex",
    alignItems: "right",
    padding: "0",
    paddingRight: "10px",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
    color: "inherit",
  },
  cardContent: {
    width: "100%",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "0",
  },
}));
