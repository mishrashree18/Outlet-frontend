import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      
    },
  },
  paper: {
    padding: theme.spacing(3),
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '10px 20px',
    color: '#77aa77',
    padding: '10px',
    
  },
  fileInput: {
    width: '100%',
    margin: '30px 30px',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttons: {
    display: 'space-between',
  },
  buttonSubmit: {
    margin: '10px',
    backgroundColor: '#77aa77',
    
  },
}));
