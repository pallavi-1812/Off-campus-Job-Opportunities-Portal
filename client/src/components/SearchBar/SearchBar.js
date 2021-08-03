import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import { useHistory } from 'react-router';
import { getJobs, getJobsBySearchText } from '../../actions/jobs';
import ChipInput from 'material-ui-chip-input';

const SearchBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const text = () => {
        return (
            <p>Make sure that<br /> the filter fields are empty<br /> before searching</p>
        );
    }

    const [search, setSearch] = useState([]);
    const [tooltipText, setTooltipText] = useState(text);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        handleSearch();
    }, [search]);

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setTooltipText("");
        }, 5000);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleAdd = (word) => {
        setSearch([...search, word]);
    }

    const handleDelete = (wordToDel) => {
        setSearch(search.filter((word) => word !== wordToDel));
    }

    const handleSearch = () => {
        if (search.length != 0) {
            dispatch(getJobsBySearchText({ search: search.join(',') }));
            window.history.pushState({}, "", `/jobs/searchByText?searchText=${search.join(',')}`);
        } else {
            dispatch(getJobs());
            window.history.pushState({}, "", `/jobs`);
        }
    }

    return (
        <Tooltip placement="right" open={open} onClose={handleClose} title={tooltipText} onOpen={handleOpen} >
            <Grid className={classes.root}>
                <ChipInput
                    className={classes.chipInput}
                    value={search}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                    label="Search..."
                    variant="outlined"
                />
                <IconButton onClick={handleSearch} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Grid>
        </Tooltip>
    );
}

export default SearchBar;