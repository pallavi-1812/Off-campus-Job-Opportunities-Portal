import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import { getJobsBySearchText } from '../../actions/jobs';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (search !== "") {
            dispatch(getJobsBySearchText(search));
            history.push(`/jobs/tpc/searchByText?searchText=${search}`);
        }
    }

    return (
        <Paper component="form" onSubmit={handleSearch} className={classes.root}>
            <InputBase
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