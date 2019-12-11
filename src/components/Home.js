import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Login from './Login';
import Register from './Register';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InputBase from '@material-ui/core/InputBase';

const message1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const message2 = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;
const message3 = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;
const message4 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '100%', height: 'auto' },
  borderColor: 'text.primary',
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image: {
    width: 128,
    height: 128,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    maxWidth: "100%",
    display: 'flex',
    margin: 7,
  },
  card1: {
    maxWidth: "100%",
    height: 100,
    display: 'flex',
    margin: 7,
  },
  media: {
    height: 140,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    
  },
  content: {
    flex: '1 0 auto',
  },
  bodyContent: {
    width: "100%",
  },
  coverBody1: {
    width: 100,
    height: 100,
  },
  coverBody2: {
    width: 200,
    height: 100,
    display: 'flex',
  },
  paper: {
    maxWidth: "100%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
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
  
export default function Home() {
  const classes = useStyles();
  const toolbarStyle = {
    backgroundColor: 'transparent',
    // background: 'transparent', 
    boxShadow: 'none'
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = 'primary-search-account-menu';
  const [openReg, setOpenReg] = React.useState(false);
  const [openLog, setOpenLog] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpenReg = () => {
    setOpenReg(true);
  };
  const handleClickOpenLog = () => {
    setOpenLog(true);
  };
  const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem onClick={handleClickOpenReg}>Register</MenuItem>
      <MenuItem onClick={handleClickOpenLog}>Login</MenuItem>
    </Menu>
  );
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{width:"80%", margin:"auto", background: 'transparent', boxShadow: 'none'}}>
          <Toolbar style={toolbarStyle}>
            <Typography variant="h6" className={classes.title}><Button>EASY!</Button></Typography>
            <div className={classes.margin}>
            <Grid container>
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
              <IconButton onClick={handleProfileMenuOpen} aria-controls={menuId} aria-haspopup="true"><PersonOutlineIcon /></IconButton >
            </Grid>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Dialog open={openReg} aria-labelledby="form-dialog-title"><Register/></Dialog>
        <Dialog open={openLog} aria-labelledby="form-dialog-title"><Login/></Dialog>
        <AppBar color="default" position="static" style={{width:"80%", margin:"auto", boxShadow: 'none'}}>
          <Grid container justify={"center"}>
            <Tabs textColor="primary" variant="scrollable" indicatorColor="primary" color="default" scrollButtons="auto" aria-label="scrollable auto tabs example">
              <Tab label="HOME" href="#"/>
              <Tab label="ONEZERO" href="Onezero"/>
              <Tab label="ELEMENTAL" href="#"/>
              <Tab label="GEN" href="#"/>
              <Tab label="ZORA" href="#"/>
              <Tab label="FORGE" href="#"/>
              <Tab label="HUMAN PARTS" href="#"/>
              <Tab label="MARKER" href="#"/>
              <Tab label="LEVEL" href="#"/>
              <Tab label="HEATED" href="#"/>
              <Tab label="MODUS" href="#"/>
              <Tab label="MORE" href="#"/>
            </Tabs>
          </Grid>
        </AppBar>
        <Typography component="div" variant="body1" style={{width:"80%", margin:"auto", boxShadow: 'none'}}>
          <Grid container spacing={1} style={{ whiteSpace: 'nowrap'}}>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.media} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeBA19lYaNX2RxsHzP8w_zHOeBoe2znzVe4M-mP2T3JZyKbxyK" title="Lorem Ipsum Title"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>Lorem Ipsum</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper" fontSize={12}>{message1}</Box>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                      <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper" fontWeight="fontWeightBold">The standard Lorem Ipsum passage</Box>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                      <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper" fontSize={12}>used since the 1500s</Box>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.card1}>
                <CardMedia className={classes.coverBody1} image="https://loremipsum.io/assets/images/lorem-ipsum-all-the-things.jpg" title="Live from space album cover"/>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={18}>10 Books That Changed My Life</Box></Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}>They Will Do Most, If Not All of the Follo</Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}><Box fontWeight="fontWeightMedium">Brooke Meredith in P.S. I Love You</Box></Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}>Nov 27</Typography>
                    </CardContent>
                  </div>
              </Card>
              <Card className={classes.card1}>
                <CardMedia className={classes.coverBody1} image="https://loremipsum.io/assets/images/lorem-ipsum-all-the-things.jpg" title="Live from space album cover"/>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={18}>How to Tell if Someone Values You.</Box></Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}>They Will Do Most, If Not All of the Follo</Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}><Box fontWeight="fontWeightMedium">Brooke Meredith in P.S. I Love You</Box></Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}>Nov 27</Typography>
                    </CardContent>
                  </div>
              </Card>
              <Card className={classes.card1}>
                <CardMedia className={classes.coverBody1} image="https://loremipsum.io/assets/images/lorem-ipsum-all-the-things.jpg" title="Live from space album cover"/>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={18}>Researchers Say No to Low Carb and Keto Diets</Box></Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}>Mac Miller</Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}><Box fontWeight="fontWeightMedium">Kristen Hovet</Box></Typography>
                      <Typography component="p" color="textSecondary" style={{fontSize: 12}}>Oct 31, 2018</Typography>
                    </CardContent>
                  </div>
              </Card>
            </Grid>
            <Grid item xs={4} style={{ whiteSpace: 'nowrap' }}>
            <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.media} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRm3mCPI1sieny6nLnERE7XNdkVuLOhQdRyLXDprT0smkkGRPGe" title="Lorem Ipsum Title"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>What is Lorem Ipsum?</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper" fontSize={12}>{message4}</Box>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                      <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper" fontWeight="fontWeightBold">The standard Lorem Ipsum passage</Box>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                      <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper" fontSize={12}>used since the 1500s</Box>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Typography>
        <Box display="flex" justifyContent="center" style={{width:"80%", margin:"auto", boxShadow: 'none'}}>
          <Box borderTop={1} {...defaultProps}>
            <Typography component="div" variant="body1">
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <Card className={classes.card}>
                      <div className={classes.details} style={{width:"100%", margin:"auto"}}>
                        <CardContent className={classes.content}>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={15}>Lorem ipsum</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={18}>The standard Lorem Ipsum passage, used since the 1500s</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12}>{message1}</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12}>Lorem ipsum dolor</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12}>Lorem ipsum dolor</Box></Typography>
                        </CardContent>
                      </div>
                      <CardMedia className={classes.coverBody2} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyebPGKbzbqQ5IYeqbhB5HE5b7I29-KaZOSPGAsiMUTFj_RV69" title="Live from space album cover"/>
                  </Card>
                  <Card className={classes.card}>
                      <div className={classes.details} style={{width:"100%", margin:"auto"}}>
                        <CardContent className={classes.content}>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={15}>Sed ut perspiciatis unde</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={18}>de Finibus Bonorum et Malorum</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12}>{message2}</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12}>Section 1.10.32 of "de Finibus Bonorum et Malorum"</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12}>written by Cicero in 45 BC</Box></Typography>
                        </CardContent>
                      </div>
                      <CardMedia className={classes.coverBody2} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaUNUdFxODxL_ZVSF43rcmmse6rMiixtnPgyJChy1fMUTbo7x6" title="Live from space album cover"/>
                  </Card>
                  <Card className={classes.card}>
                      <div className={classes.details} style={{width:"100%", margin:"auto"}}>
                        <CardContent className={classes.content}>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={15}>At vero eos et accusamus</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={18}>de Finibus Bonorum et Malorum</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12}>{message3}</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12}>Section 1.10.33 of "de Finibus Bonorum et Malorum"</Box></Typography>
                          <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12}>written by Cicero in 45 BC</Box></Typography>
                        </CardContent>
                      </div>
                      <CardMedia className={classes.coverBody2} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6COLg9qTNLZXrZfaADv22ak8D11SF6A747C6BB7i9XNB8Acne" title="Live from space album cover"/>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Box borderBottom={1} {...defaultProps}>
                    <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} >Popular on EASY!</Box></Typography>
                  </Box>
                  <Grid container spacing={3} direction="row" justify="flex-end" alignItems="flex-start">
                    <Grid item xs={2} p={5}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>01</Box></Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >Scientists Are Contemplating a 1,000-Year Space Mission to Save Humanity</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >Corin Faife in OneZero</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Dec 5</Box></Typography>
                    </Grid>
                    <Grid item xs={2} p={5}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>02</Box></Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >My Son Wore a Dress for Picture Day, and It Reaffirmed My Faith in Humanity</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >Alex Richards in Apparently</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Nov 13</Box></Typography>
                    </Grid>
                    <Grid item xs={2} p={5}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>03</Box></Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >Do These Things Before Going to Bed and You’ll Wake up Energized for Tomorrow</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >Tim Denning in P.S. I Love You</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Nov 27</Box></Typography>
                    </Grid>
                    <Grid item xs={2} p={5}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>04</Box></Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >The Absurd Story Behind China’s Biggest Bank Robbery</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >David Gauvey Herbert in Marker</Box></Typography>
                      <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Dec 4</Box></Typography>
                    </Grid>
                  </Grid>
                  
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Box>
      </div>
    );
  }