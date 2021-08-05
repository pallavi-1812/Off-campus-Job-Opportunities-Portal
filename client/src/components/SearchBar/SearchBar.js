import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import SearchIcon from "@material-ui/icons/Search";
import { getJobs, getJobsBySearchText } from "../../actions/jobs";
import useStyles from "./styles";

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [search, setSearch] = useState([]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [search]);

  const handleAdd = (word) => {
    setSearch([...search, word]);
  };

  const handleDelete = (wordToDel) => {
    setSearch(search.filter((word) => word !== wordToDel));
  };

  const handleSearch = () => {
    // eslint-disable-next-line
    if (search.length != 0) {
      dispatch(getJobsBySearchText({ search: search.join(",") }));
      window.history.pushState({}, "", `/jobs/searchByText?searchText=${search.join(",")}`);
    } else {
      dispatch(getJobs());
      window.history.pushState({}, "", `/jobs`);
    }
  };

  return (
    <Grid className={classes.root}>
      <ChipInput className={classes.chipInput} value={search} onAdd={handleAdd} onDelete={handleDelete} label="Search..." variant="outlined" />
      <IconButton onClick={handleSearch} className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>
  );
};

export default SearchBar;
