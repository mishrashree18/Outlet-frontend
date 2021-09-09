import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';
import outlet from '../../images/outlet.svg';

import useStyles from './Styles';

const Navbar = () => {
    const classes = useStyles();
    const user= null;

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <img className={classes.image} src={outlet} alt="outlet" height="70" />
        <Typography align='center' component={Link} to="/" className={classes.heading} variant="h2" align="center">
        &nbsp; Outlet 
        </Typography>
        
        </div>
        <Toolbar variant="dense" className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout}>Logout</Button>
                
                
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained">
                    SignIn
                </Button>
            )}
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
