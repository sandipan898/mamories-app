import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();    
    const user = null;

    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography className={classes.heading} component={Link} to='/' variant="h2" align="center">
                        Memories
                    </Typography>
                    <img className={classes.image} src={memories} alt="memories" heigh="60"/>
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Signin</Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar