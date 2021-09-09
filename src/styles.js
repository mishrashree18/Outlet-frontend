import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      heading: {
         color: '#77aa77',
         marginTop: '5px',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: "column-reverse",
      }
    },


}));