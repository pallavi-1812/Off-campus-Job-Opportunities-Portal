import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3.5rem',
        marginLeft: '1.3rem',
        "& label": {
            fontSize: "1.2rem",
            top: "0px !important",
        },
        "& .MuiChip-root": {
            backgroundColor: "#0062ff",
            fontSize: "1rem",
            color: "#fff"
        },
        "& .MuiChip-deleteIcon": {
            fill: "#ffffff"
        },
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "1rem"
        }
    },
    chipInput: {
        width: '100%',
        background: '#fff',
        border: '0px solid #fff',
    },
    iconButton: {
        background: '#fff',
        position: 'relative',
        right: '3.3rem'
    }
}));