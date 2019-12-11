import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
}));

export default function ArticleDetail() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: 'transparent'}}>
                <Toolbar style={{width:"90%", margin:"auto"}}>
                    <Typography className={classes.title} variant="h6" noWrap>
                    <IconButton href="Home"><img src="https://icon-library.net/images/e-icon/e-icon-29.jpg" height="30" width="30"/></IconButton>
                    </Typography>
                    <div className={classes.search} style={{backgroundColor: '#F5F5F5', color: 'black'}}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton ><NotificationsNoneIcon /></IconButton >
                    <IconButton ><PersonOutlineIcon /></IconButton >
                </Toolbar>
            </AppBar>
            <Grid container style={{width:"90%", margin:"auto"}}>
                <Typography style={{fontWeight:"fontWeightBold", fontSize:40, marginTop:"50px"}}>Bookmarks</Typography>
            </Grid>
            
                <Box border={1} style={{width:"90%", margin:"auto", height:"70px"}}>
                <Grid container style={{width:"100%", margin:"auto"}}>
                    <Grid xs={1}>
                        <BookmarkBorderIcon style={{fontSize: 40, marginTop:"15px", marginLeft:"15px"}}/>
                    </Grid>
                    <Grid xs={10}>
                        <Typography style={{fontSize:40}}>Offline reading is here.</Typography>
                    </Grid>
                    <Grid xs={1}>
                        <Typography style={{fontSize:40}}><Button variant="contained">Upgrade</Button></Typography>
                    </Grid>
                </Grid>
                </Box>
            
            
        </div>
    );
}
