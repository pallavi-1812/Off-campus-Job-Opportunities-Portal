import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    // root: {
    //     width: '100%',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '3.5rem',
    //     marginLeft: '1.3rem',
    //     "& label": {
    //         fontSize: "1.2rem",
    //         top: "0px !important",
    //     },
    //     "& .makeStyles-chipInput-50:hover": {
    //         border: "1px solid #1493e7 !important",
    //         outline: "none"
    //     },
    //     "& .MuiChip-root": {
    //         backgroundColor: "#0062ff",
    //         fontSize: "1rem"
    //     },
    //     "& .MuiSvgIcon-root": {
    //         fill: "#ffffff"
    //     }
    // },
    // chipInput: {
    //     width: '100%',
    //     background: '#fff',
    //     border: '0px solid #fff',
    // },
    // iconButton: {
    //     background: '#000',
    //     position: 'relative',
    //     right: '3.3rem',
    //     color: "#000 !important"
    // }
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
        "& .makeStyles-chipInput-50:hover": {
            border: "1px solid #1493e7 !important",
            outline: "none"
        },
        "& .MuiChip-root": {
            backgroundColor: "#0062ff",
            fontSize: "1rem",
            color: "#fff"
        },
        "& .MuiChip-deleteIcon": {
            fill: "#ffffff"
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