import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import { getJobs, getJobsBySearchText } from '../../actions/jobs';

const SearchBar = ({ search, setSearch }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search !== "") {
            dispatch(getJobsBySearchText(search));
            window.history.pushState({}, '', `/jobs/tpc/searchByText?searchText=${search}`);
        }
    }

    return (
        <Paper component="form" onSubmit={handleSearch} className={classes.root}>
            <InputBase
                fullWidth
                className={classes.input}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search by text' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;