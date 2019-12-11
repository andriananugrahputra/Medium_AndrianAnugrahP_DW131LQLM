import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
    styleMedia:{
        height: 300,
        width: 800,
    },
    styleMediaText:{
        height: 500,
        width: 100,
    },
}));
  
export default function Onezero() {
    const classes = useStyles();
    return (
      <div className={classes.root} style={{width:"90%", margin:"auto"}}>
        <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}><IconButton href="Home"><img src="https://icon-library.net/images/e-icon/e-icon-29.jpg" height="30" width="30"/></IconButton></Typography>
            <div className={classes.margin}>
            <Grid container>
              <div className={classes.search} style={{backgroundColor: '#F5F5F5', color: 'black'}}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search OneZero"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <IconButton ><NotificationsNoneIcon /></IconButton >
              <IconButton ><PersonOutlineIcon /></IconButton >
            </Grid>
            </div>
          </Toolbar>
        </AppBar>
        <Grid container style={{marginTop:"50px", marginBottom:"50px"}}>
            <Grid item xs={12} sm={3}>
                <Button disabled><img src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" width="270" height="61"/></Button>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Typography style={{fontSize: 20}}>
                    <Box fontWeight="fontWeightMedium">The front lines of the future. A Medium publication about tech and science.</Box>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Button style={{marginLeft:"300px"}} variant="outlined" color="#6A0BFF">Follow</Button>
            </Grid>
        </Grid>
        {/* -------- */}
        <Grid container style={{ marginTop:"25px", marginBottom:"25px"}}>
            <Grid item xs={12} sm={7}>
                   <img src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg" width="100%" height="350px"/>
            </Grid>
            <Grid item xs={12} sm={5} style={{backgroundColor:"#6A0BFF", height:"350px", textAlign:"center"}}>
                <Typography style={{ marginTop:"100px", color:"white"}}>
                    <Typography style={{fontSize: 28}}>The Influencer and the Hit Man</Typography>
                    <Typography style={{fontSize: 20}}>How a years-long domain name feud ended in a bloody shootout</Typography>
                    <Typography style={{fontSize: 15}}>Ian Frisch</Typography>
                    <Typography style={{fontSize: 18}}>Dec 10·24 min read</Typography>
                </Typography>
            </Grid>
        </Grid>
        <Grid container style={{ marginTop:"25px", marginBottom:"25px"}}>
            <Grid item xs={12} sm={5} style={{backgroundColor:"#FFFFFF", height:"350px", textAlign:"center"}}>
                <Typography style={{ marginTop:"100px", color:"black"}}>
                    <Typography style={{fontSize: 28}}>The Influencer and the Hit Man</Typography>
                    <Typography style={{fontSize: 20}}>How a years-long domain name feud ended in a bloody shootout</Typography>
                    <Typography style={{fontSize: 15}}>Ian Frisch</Typography>
                    <Typography style={{fontSize: 18}}>Dec 10·24 min read</Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
                   <img src="https://miro.medium.com/max/1200/1*MDxT8MJL3DmelDMv3-gd9A.gif" width="100%" height="350px"/>
            </Grid>
        </Grid>
        <Grid container style={{ marginTop:"25px", marginBottom:"25px"}}>
            <Grid item xs={12} sm={7}>
                   <img src="https://miro.medium.com/max/695/0*LG1uUR7TbMplW8xf" width="100%" height="350px"/>
            </Grid>
            <Grid item xs={12} sm={5} style={{backgroundColor:"#6A0BFF", height:"350px", textAlign:"center"}}>
                <Typography style={{ marginTop:"100px", color:"white"}}>
                    <Typography style={{fontSize: 28}}>The Influencer and the Hit Man</Typography>
                    <Typography style={{fontSize: 20}}>How a years-long domain name feud ended in a bloody shootout</Typography>
                    <Typography style={{fontSize: 15}}>Ian Frisch</Typography>
                    <Typography style={{fontSize: 18}}>Dec 10·24 min read</Typography>
                </Typography>
            </Grid>
        </Grid>
        <Grid container style={{ marginTop:"25px", marginBottom:"25px"}}>
            <Grid item xs={12} sm={5} style={{backgroundColor:"#FFFFFF", height:"350px", textAlign:"center"}}>
                <Typography style={{ marginTop:"100px", color:"black"}}>
                    <Typography style={{fontSize: 28}}>The Influencer and the Hit Man</Typography>
                    <Typography style={{fontSize: 20}}>How a years-long domain name feud ended in a bloody shootout</Typography>
                    <Typography style={{fontSize: 15}}>Ian Frisch</Typography>
                    <Typography style={{fontSize: 18}}>Dec 10·24 min read</Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
                   <img src="https://miro.medium.com/max/3840/1*yYP8rlvTuCML1_N9AlQOTg.jpeg" width="100%" height="350px"/>
            </Grid>
        </Grid>
        <Grid container style={{marginTop:"25px", marginBottom:"25px"}}>
            <Grid item xs={12} style={{backgroundColor:"#DAF832"}}>
                <Box style={{width:"55%", margin:"auto", marginTop:"25px"}}>
                    <Typography style={{fontSize: 40}}>“We have a few new things to share.”</Typography>
                    <Typography style={{fontSize: 20}}>— Damon Beres</Typography>
                    <Typography style={{fontSize: 25}}>Welcome to a Refreshed OneZero”</Typography>
                    <Typography style={{fontSize: 20}}>Dec 3·2 min read</Typography>
                </Box>
            </Grid>
        </Grid>
        <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px", width:"55%", margin:"auto"}}>
            <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                <Box borderTop={1}/>
                <Grid xs={7}>
                    <Typography style={{fontSize: 25}}>The Case for Removing All Politicians From Twitter</Typography>
                    <Typography style={{fontSize: 20}}>Political omnipresence has gone too far</Typography>
                    <Typography style={{fontSize: 15}}>Robert Howell</Typography>
                    <Typography style={{fontSize: 13}}>Dec 11·5 min read</Typography>
                </Grid>
                <Grid xs={5}><img src="https://miro.medium.com/max/5184/1*11AJIbhFAuf_YHf14jiKhQ.jpeg" height="160" width="100%"/></Grid>
                <Typography style={{fontSize: 20}}></Typography>
            </Grid>
        </Box>
        <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px", width:"55%", margin:"auto"}}>
            <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                <Box borderTop={1}/>
                <Grid xs={7}>
                    <Typography style={{fontSize: 25}}>Uber Delivery Workers in Mexico Track Thieves Through a Secret WhatsApp Network</Typography>
                    <Typography style={{fontSize: 20}}>A 1,000-person WhatsApp community keeps delivery workers safe</Typography>
                    <Typography style={{fontSize: 15}}>Martha Pskowski</Typography>
                    <Typography style={{fontSize: 13}}>Dec 11·9 min read</Typography>
                </Grid>
                <Grid xs={5}><img src="https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg" height="160" width="100%"/></Grid>
                <Typography style={{fontSize: 20}}></Typography>
            </Grid>
        </Box>
        <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px", width:"55%", margin:"auto"}}>
            <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                <Box borderTop={1}/>
                <Grid xs={7}>
                    <Typography style={{fontSize: 25}}>A New Smart Contact Lens Can Charge Wirelessly Without Burning Your Eyeballs</Typography>
                    <Typography style={{fontSize: 20}}>The technology uses supercapacitors and will help speed the creation of contacts lenses that monitor the body</Typography>
                    <Typography style={{fontSize: 15}}>Yasmin Tayag</Typography>
                    <Typography style={{fontSize: 13}}>Dec 11·3 min read</Typography>
                </Grid>
                <Grid xs={5}><img src="https://miro.medium.com/max/559/1*-8KL6r_tNZ9B2Lfz_9dc0Q.png" height="160" width="100%"/></Grid>
                <Typography style={{fontSize: 20}}></Typography>
            </Grid>
        </Box>
        <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px", width:"55%", margin:"auto"}}>
            <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                <Box borderTop={1}/>
                <Grid xs={7}>
                    <Typography style={{fontSize: 25}}>‘I Felt Like a Time Traveler’: 6 Months Without the Internet</Typography>
                    <Typography style={{fontSize: 20}}>The artist Nastja Säde Rönkkö talks about what life was like when she utterly disconnected from the online world for half a year</Typography>
                    <Typography style={{fontSize: 15}}>Thomas McMullan</Typography>
                    <Typography style={{fontSize: 13}}>Dec 11·5 min read</Typography>
                </Grid>
                <Grid xs={5}><img src="https://miro.medium.com/max/5747/1*csm12WLUqj53wH7gajw8Rg.jpeg" height="160" width="100%"/></Grid>
                <Typography style={{fontSize: 20}}></Typography>
            </Grid>
        </Box>
        <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px", width:"55%", margin:"auto"}}>
            <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                <Box borderTop={1}/>
                <Grid xs={7}>
                    <Typography style={{fontSize: 25}}>If It’s OK to Fantasize About Someone You Know, Why Not in VR?</Typography>
                    <Typography style={{fontSize: 20}}>Erotic deepfakes are only going to make the question of sexual ethics muddier and more confusing</Typography>
                    <Typography style={{fontSize: 15}}>Lux Alptraum</Typography>
                    <Typography style={{fontSize: 13}}>Dec 11·7 min read</Typography>
                </Grid>
                <Grid xs={5}><img src="https://miro.medium.com/max/6300/1*Tc40NLUUtVafKwrl28VBrQ.jpeg" height="160" width="100%"/></Grid>
                <Typography style={{fontSize: 20}}></Typography>
            </Grid>
        </Box>
      </div>
    );
  }