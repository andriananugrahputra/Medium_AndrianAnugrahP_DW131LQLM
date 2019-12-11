import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Register from './Register';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export default function Login(){
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <IconButton href="home"><CloseIcon /></IconButton>
      <Box my={5} align="center">
        <Typography variant="h4" gutterBottom>Sign in with email</Typography>
        <Typography variant="p" gutterBottom>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</Typography>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your email" fullWidth/></Box>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your password" fullWidth/></Box>
        <Box p={1} m={1}><Button variant="contained" color="primary" href="#" fullWidth>Continue</Button></Box>
        {/* <Typography variant="p" gutterBottom><Link color="primary" onClick={handleClickOpen}>All sign in options</Link></Typography> */}
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Register/>
    </Dialog>
    </Container>
    
  );
}