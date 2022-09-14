import { Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React, { useState } from "react";

import Input from './Input';
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChangePassword = () => {
    
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                { isSignup && (
                    <>
                    <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                    <Input name="lirstname" label="Lirst Name" handleChange={handleChange} half />
                    </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChangePassword} type="email" />
                <Input name="password" label="Password" handleChange={handleChangePassword} type="password" />
                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChangePassword} type="password" /> }
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                        { isSignup ? 'Already have an account? Sign In' : 'New here? Sign Up'}
                    </Button>
                </Grid>
            </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
