import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import classes from '@material-ui/core/classes';
// import MenuIcon from '@material-ui/core/MenuIcon';
import Typography from '@material-ui/core/Typography';

function Navbar() {
  return (
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Revma
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
  );
}

export default Navbar;



