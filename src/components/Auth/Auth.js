import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Input from './Input';


const Auth = () => {
 
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {
       
    };
    const handleChange = () => {
       
    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };


    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token }});
        } catch (error) {
            console.log(error);
        }
    };



    const googleFailure = () => {
        console.log('error');
    };



    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing ={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirm password" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <GoogleLogin
                        clientId="521969668649-s1lre22jtihk1t998vbeqlhriu4qpdra.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                            className={classes.googleButton} 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            // startIcon={} 
                            variant="contained" >Sign In with Google</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Signup' : 'SignIn'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item><Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign In' : "Dont't have an account? Sign up" }</Button></Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
