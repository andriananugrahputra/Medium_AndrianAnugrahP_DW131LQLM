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
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const message = `If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?
To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.
Deep Work: Rules for Focused Success in a Distracted World by Cal Newport Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, you’re going to get screwed. This is a book that explains how to cultivate and protect that skill — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.
The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson To me, practical philosophy has always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.
The Way to Love: The Last Meditations of Anthony de Mello by Anthony de Mello Coach Shaka Smart recommended this little book (and it’s a little book, probably the smallest I’ve ever read. It fits in your palm). But it’s an incredibly wise and helpful read. Written by a Catholic Priest who’d lived in India, the book has this unusual convergence of eastern and western thought. One of my favorite lines: “The question to ask is not ‘What’s wrong with this person?’ but ‘What does this irritation tell me about myself?’ I plan on regularly revisiting it throughout 2018.
But What If We’re Wrong by Chuck Klosterman It’s always good to remind ourselves that almost everything we’re certain about will probably be eventually proven wrong. Klosterman’s subtitle — Thinking About the Present As If It Were the Past — is a brilliant exercise for getting some perspective in 2018. Whether you think it’s going to be a year of radical change for the better or a horrible year of excesses of dangerous precedent, you’re probably wrong. You’re probably not even in the ballpark. This book shows you why, not with lectures about politics, but with a bunch of awesome thought experiments about music, books, movies and science.
Rules for Radicals: A Practical Primer for Realistic Radicals by Saul Alinsky If Hillary Clinton had remembered the lessons of Saul Alinsky (who she wrote her college thesis on), the election may have turned out differently. Why? A notorious strategist and community organizer, Alinsky was a die hard pragmatist, but he also knew how to tell a story and create a collective cause. He could work within the system but knew how to shake it up and generate attention. This book is a classic and woefully underrated. Whatever you set out to do in 2018, this book can provide you with strategic guidance and insight.
The Filter Bubble by Eli Pariser / Trust Me I’m Lying by Ryan Holiday / The Brass Check by Upton Sinclair I strongly recommend that you take the time in 2018 to read these books. In light of this year, you owe it to yourself to study and better understand how our media system works. In The Filter Bubble, Eli Pariser warns of the danger of living in bubbles of personalization that reinforce and insulate our worldview. Though Sinclair’s The Brass Check has been almost entirely forgotten by history, it’s not only fascinating but a timeless perspective. Sinclair deeply understood the economic incentives of early 20th century journalism and thus could predict and analyze the manipulative effect it had on The Truth. I used that book as a model for my expose of the media system, Trust Me, I’m Lying. Today, the incentives and pressures are different but they warp our information in a similar way. In almost every substantial charge Upton leveled against the yellow press, you could, today, sub in blogs and the cable news cycle and be even more correct.
48 Laws of Power / 33 Strategies of War by Robert Greene Robert Greene is a master of human psychology and human dynamics — he has a profound ability to explain timeless truths through story and example. You can read the classics and not always understand the lessons. But if you read Robert’s books, I promise you will leave not just with actionable lessons but an indelible sense of what to do in many trying and confusing situations. I wrote earlier this year that strategic wisdom is not something we are born with — but the lessons are there for us to pick up. Pick these two up before the year ends and operate the next with a strategic mindset and clarity.
Conspiracy: Peter Thiel, Hulk Hogan, Gawker, and the Anatomy of Intrigue by Ryan Holiday — If you want to immerse yourself in the above topics of media and strategy, and are looking for one book to teach you lessons in both, my book on the nearly decade-long conspiracy that billionaire Peter Thiel waged against Gawker will do this for you. This is a stunning story about how power works in the modern age, and is a masterclass in strategy and how to accomplish wildly ambitious aims.
The Road To Character by David Brooks When General Stanley McChrystal was asked on the Tim Ferriss podcastwhat was a recent purchase that had most positively impacted his life, he pointed to this book. I agree. It can be a bit stilted and dense at times, but it should be assigned reading to any young person today (a little challenge is a good thing). Illustrating with examples and stories from great men and women, Brooks admonishes the reader to undertake their own journey of character perfection. In my own book, I explore the same topic (humility) from a different angle using similar stories — I’m attacking ego, he’s building up character. Both will be important for the next year.
The Dip by Seth Godin This book is a short 70 pages and it looks like something someone would give as a joke gift, but it’s anything but. Godin talks frankly about quitting and pushing through — and when to do each. Quit when you’ll be mediocre, when the returns aren’t worth the investment, when you no longer think you’ll enjoy the ends. Stick when the dip is the obstacle that creates scarcity, when you’re simply bridging the gap between beginner’s luck and mastery. I promise, next year you are guaranteed to find yourself in moments when you don’t know what is the right answer. This book will help you find it.
Hillbilly Elegy: A Memoir of a Family and Culture in Crisis by J. D. Vance / Strangers in Their Own Land: Anger and Mourning on the American Right by Arlie Russell Hochschild You might describe Hillbilly Elegy as a Ta-Nehisi Coates style memoir about a community that — at least in progressive circles — gets a lot less attention: disaffected, impoverished whites (particularly in the mid-east and South). I thought the book was empathetic, self-aware and inspiring. The author pokes some holes in the concept of “white privilege” — certainly a third or fourth generation hillbilly in Kentucky doesn’t walk around feeling like they have it easy — and an explanation of some of the phenomenon behind Donald Trump (notice I said explanation, not an excuse). This is a sober but also hopeful book. I urge people on all sides of the political spectrum to read it, but progressives would benefit from the eye-opening perspective the most. Pair it with Strangers in Their Own Land, the author of which, a Berkeley native, visits and interviews people in the deep Louisiana countryside. (Remember: you don’t have to agree with the people you’re reading about — but you should care what makes them tick.)
It Can’t Happen Here by Sinclair Lewis This book is one that will make you so uncomfortable that you’ll probably pick it up and put it down several times. It almost shocks you that this exists, that it’s not some work of fiction pretending to be 80 years old. But no, in fact, one of America’s most famous writers wrote a bestselling book about an appalling populist demagogue who won the presidency of the United States. Europe was a mess, the economy was in the toilet. Well meaning people talked earnestly about the need for “serious change” and “revolution.” The parties split, and a fringe candidate suddenly becomes viable. When people tried to question some of the ideas he campaigned on, they were shouted down: “This is how all politicians speak. He’s not serious about that extreme stuff.” Life imitates art and now, this is what actually happened. Change the dates, places and names and it’s no longer fiction, it’s real. Fiction is best when it puts a mirror up to us. This book does that. If you don’t read the book, at least please read about it. Because you need to know. It can happen here.
How to Live: Or A Life of Montaigne in One Question and Twenty Attempts at an Answer by Sarah Bakewell The book is spectacular. It was a bestseller in the UK and was featured in a 6 part series in The Guardian. The format of the book is a bit unusual, instead of chapters it is made up of 20 Montaigne style essays that discuss the man from a variety of different perspectives. Montaigne was a man obsessed with figuring himself out — why he thought the way he did, how he could find happiness, his fetishes, his near-death experiences. He lived in tumultuous times too and he coped by looking inward. We’re lucky he did, and we can do the same.
Tribe: On Homecoming and Belonging by Sebastian Junger Junger looks at many of the social issues we have today: PTSD. Depression. Political polarization. Contempt for our fellow citizens. Aimlessness. We’ve lost the bonds that tie a tribe and culture together. No wonder veterans feel alone and lost when they leave their tight knit tribe and re-enter solitary civilian life. No wonder manypeople feel that way regardless of whether they served or not. No wonder we have trouble agreeing on basic solutions to common problems. There is no sense of what is common or basic or shared. Given the divisiveness that we are facing as a society — that became painfully clear in 2016 — this is one of the most urgent and important book you need to read next year.
The Years of Lyndon Johnson (4 Volumes) by Robert A. Caro In January of 2016, I picked up my first book in this Caro’s series on Lyndon Johnson. It wasn’t until June that I finished my fourth, but I consider finishing all (~3,500 pages) of them to be one of my proudest reading achievements. If there is one line that sums up the whole series it’s this: It’s that power doesn’t only corrupt. That’s too simple. What power does is reveal. It’s also easy to be disillusioned by politics right now but for me, getting lost in these Lyndon Johnson books has been a helpful and educational process. Because you learn two things 1) that things have always been complicated and confusing but they tend to turn out alright 2) that our system, whatever its flaws, can still produce good results from bad men. And without a doubt, that’s a good reminder to have on the eve of 2018.
The Last Lion: Winston Spencer Churchill (3 Volumes) by William Manchester Don’t think an individual can make a difference in history? Then you haven’t read enough about Winston Churchill. The scenes in this book: warning about the looming threat of Nazism, the retreat at Dunkirk, persevering through the Blitz, vowing to fight on the landing grounds and the beaches and in the streets, whatever the cost may be. The sheer determination of this man, to take an entire country on your back and defy a horde which had overrun the European continent in a matter of months…it’s almost breathtaking to think about. (If you were to only read one thing in the next year, you could do a lot worse than either of these series. They contain dozens of books within them and will teach you about so much more than just the man they are ostensibly about. Please, please read them.)
Mr. Eternity by Aaron Thier / The Count of Monte Cristo by Alexandre Dumas These books really have nothing to do with the events of 2016 but they are long and entertaining and they will make you forget your problems for the next 12 months. I thought I’d read Monte Cristo as a kid, but clearly I didn’t. Because the actual book is a 1,200 page epic of some of the most brilliant, beautiful and complicated storytelling ever put to paper. What a book! When I typed out my notes (and quotes) after finishing this book, it ran some 3,000 words. As for Mr. Eternity, it’s a fun, epic jaunt through the distant future (as though it was the past) in the vein of Voltaire’s Candide. Candide isn’t a bad read for this year either: “We must cultivate our own garden.”`;
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
    <div className={classes.root} style={{width:"90%", margin:"auto"}}>
      <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
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
      <AppBar color="default" position="static" style={{background: 'transparent', boxShadow: 'none'}}>
          <Grid container>
            <Tabs textColor="primary" variant="scrollable" indicatorColor="primary" color="default" scrollButtons="auto" aria-label="scrollable auto tabs example">
                <Button href="Home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpBRzaZIR-fvg6cC5MCetpLvMfLzloAdJM3IwIj8z8Q8kiMepV" height="30" width="30"/><Tab label="EASY!" href="#"/></Button>
                <Tab label="ORIGINALS" href="#"/>
                <Tab label="SUBSCRIBE" href="#"/>
            </Tabs>
          </Grid>
        </AppBar>
        <Grid container>
            {/* <Box ><img src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"/></Box> */}
            <Grid xs={12}>
                <img src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" style={{width:"100%", margin:"auto"}}/>
            </Grid>
        </Grid>
        <Grid container style={{width:"60%", margin:"auto"}}> 
            <Typography style={{fontSize: 40, marginBottom:"25px"}}>
            If You Only Read A Few Books In 2018, Read These
            </Typography>
            <Grid xs={1}>
                <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png" />
            </Grid>
            <Grid xs={7}>
                <Typography style={{fontSize: 12}}>Ryan Holiday   <Button variant="outlined" color="primary" size="small">Follow</Button></Typography>
                <Typography style={{fontSize: 12}}>Jun 26, 2018 · 10 min read</Typography>
            </Grid>
            <Grid xs={4}>
              <IconButton><TwitterIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><BookmarkBorderIcon /></IconButton>
            </Grid>
            <Typography style={{fontSize: 20}}>{message}</Typography>
            <Grid xs={12} style={{marginTop:"25px", marginBottom:"25px"}}>
              <Button variant="contained">Books</Button>
              <Button variant="contained">Self Improvement</Button>
              <Button variant="contained">Productivity</Button>
              <Button variant="contained">Life</Button>
              <Button variant="contained">Life lesson</Button>
            </Grid>
            <Grid xs={1}>
            <IconButton><svg width="33" height="33" viewBox="0 0 33 33"><path d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z" fill-rule="evenodd"></path></svg></IconButton>
            </Grid>
            <Grid xs={7}>
            <Typography>54K claps</Typography>
            </Grid>
            
            <Grid xs={4}>
            <IconButton><TwitterIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><BookmarkBorderIcon /></IconButton>
              <IconButton><MoreHorizIcon /></IconButton>
            </Grid>
        </Grid>
        <Grid container style={{width:"60%", margin:"auto"}}>
            <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px"}}>
                <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                    <Box borderTop={1}/>
                    <Grid xs={2}>
                        <Avatar style={{height:80, width:80}}alt="Remy Sharp" src="https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png" width="80" height="80"/>
                    </Grid>
                    <Grid xs={8}>
                        <Typography style={{fontSize: 18}}>WRITTEN BY</Typography>
                        <Typography style={{fontSize: 24}}>Ryan Holiday</Typography>
                        <Typography style={{fontSize: 15}}>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant="outlined" size="large">Follow</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                    <Grid xs={2}>
                        <Avatar style={{height:80, width:80}}alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk2noBKzHOetJ_WFQqr-q7-gXJeoYIYOA4szuNUd9Gjwqq5ZGs" width="80" height="80"/>
                    </Grid>
                    <Grid xs={8}>
                        <Typography style={{fontSize: 24}}>Mission.org</Typography>
                        <Typography style={{fontSize: 15}}>A network of business & tech podcasts designed to accelerate learning. Selected as “Best of 2018” by Apple. Mission.org</Typography>
                    </Grid>  
                    <Grid xs={2}>
                        <Button variant="outlined" size="large">Follow</Button>
                    </Grid>
                </Grid>
                
            </Box>
            <Button variant="outlined" size="large" style={{width:"100%", margin:"auto", marginBottom:"50px"}}>See responses</Button>
        </Grid>
    </div>
  );
}