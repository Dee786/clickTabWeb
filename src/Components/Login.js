import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { encryptStorage } from '../utils/encryptStorage';
import Slide from '@mui/material/Slide';
import Parse from 'parse/dist/parse.min.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login({}) {
  const [open, setOpen] = React.useState(false);
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  //console.log(Parse.User.current().get('username'))

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = email;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get(
          'username'
        )} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setemail('');
      setpassword('');
      encryptStorage.setItem('user_clicktabweb',{email,password});
      setOpen(false);
      window.location.replace('/dashboard');
      // Update state variable holding current user
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const emails = ["deepank123@gmail.com","shubham@gmail.com"]

  const handleSubmit = () => {
    console.log(email,password)
    if(email && password){
      if(emails.includes(email) && password === 'test123test'){
        encryptStorage.setItem('user_clicktabweb',{email,password});
        setOpen(false);
        window.location.replace('/dashboard');
      }
      else{
        alert('incorect email and password');
      }
    }
    else{
      alert("wrong input")
    }
  };

  return (
    <div>
      <Button style={{color:"white"}} onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} Transition={Transition} TransitionComponent={Transition}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>setemail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>setpassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={doUserLogIn}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
