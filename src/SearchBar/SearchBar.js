import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';


const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"70rem",background:"#F2F1F9", border:"none", padding:".4rem"};
  
  return (
    
    <input 
    style={BarStyling}
    key="random1"
    value={keyword}
    placeholder={"search a city"}
    onChange={(e) => setKeyword(e.target.value)}
   />
  
  );
}

export default SearchBar