import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center'
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const JobMarks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    },
];

const InternMarks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 100,
        label: '100',
    },
];

function valuetext(value) {
    return `${value} INR`;
}

const DiscreteSlider = ({ internBool }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6" id="discrete-slider-custom" gutterBottom>
                {internBool ? 'Stipend Range(in K)' : 'Salary Range(in LPA)'}
            </Typography>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
                marks={internBool ? InternMarks : JobMarks}
            />
        </div>
    );
}

export default DiscreteSlider;