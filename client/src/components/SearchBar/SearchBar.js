import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import SearchIcon from "@material-ui/icons/Search";

import { getJobs, getJobsBySearchText } from "../../actions/jobs";
import useStyles from "./styles";

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const text = () => {
    return (
      <p>
        Make sure that
        <br /> the filter fields are empty
        <br /> before searching
      </p>
    );
  };

  const [search, setSearch] = useState([]);
  const [tooltipText, setTooltipText] = useState(text);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [search]);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setTooltipText("");
    }, 5000);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <Tooltip placement="right" open={open} onClose={handleClose} title={tooltipText} onOpen={handleOpen}>
      <Grid className={classes.root}>
        <ChipInput className={classes.chipInput} value={search} onAdd={handleAdd} onDelete={handleDelete} label="Search..." variant="outlined" />
        <IconButton onClick={handleSearch} className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Tooltip>
  );
};

export default SearchBar;
