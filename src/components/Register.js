import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import Login from './Login';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function Register(){
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <IconButton href="home"><CloseIcon /></IconButton>
      <Box my={5} align="center">
        <Typography variant="h4" gutterBottom>Join EASY!</Typography>
        <Typography variant="p" gutterBottom>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</Typography>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your username" fullWidth/></Box>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your email" fullWidth/></Box>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your password" fullWidth/></Box>
        <Box p={1} m={1}><Button variant="contained" color="primary" href="#" fullWidth>Registration</Button></Box>
        {/* <Typography variant="p" gutterBottom><Box fontWeight="fontWeightBold" m={1}>Already have an account? <Link color="primary" onClick={handleClickOpen}>Sign in</Link></Box></Typography> */}
        <Typography variant="p" gutterBottom>To make EASY! work, we log user data and share it with service providers. Click “Sign Up” above to accept EASY! <Link color="primary" href="#">Terms of Service</Link> & <Link color="primary" href="#">Privacy Policy</Link>.</Typography>     
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Login/>
    </Dialog>
    </Container>
  );
}