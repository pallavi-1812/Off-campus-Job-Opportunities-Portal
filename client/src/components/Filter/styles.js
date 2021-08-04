import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  itemDiv: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem 0",
    justifyContent: "center",
    "& .MuiAutocomplete-fullWidth": {
      backgroundColor: "#fff",
    }
  },
  filterDiv: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "0.2rem",
    alignItems: "center",
    marginLeft: "1rem",
    height: "fit-content",
    borderTop: "4px solid #0062ff",
    boxShadow: "0px 2px 3px 0px #808080"
  },
}));
