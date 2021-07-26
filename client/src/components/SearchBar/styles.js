import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3.5rem',
        marginLeft: '1.3rem'
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