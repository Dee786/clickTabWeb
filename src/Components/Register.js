import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { encryptStorage } from '../utils/encryptStorage';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


  // Functions used by the screen components
  export default function Register({}) {
    const [open, setOpen] = React.useState(false);
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    
    const doUserRegistration = async function () {
      // Note that these values come from state variables that we've declared before
      const usernameValue = email;
      const passwordValue = password;

      try {
        // Since the signUp method returns a Promise, we need to call it using await
        const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
        alert(
          `Success! User ${createdUser.getUsername()} was successfully created!`
        );
        encryptStorage.setItem('user_clicktabweb',{email,password});
        setOpen(false);
        window.location.replace('/dashboard');
      } catch (error) {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        alert(`Error! ${error}`);
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
        Register
      </Button>
      <Dialog open={open} onClose={handleClose} Transition={Transition} TransitionComponent={Transition}>
        <DialogTitle>Register</DialogTitle>
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
          <Button onClick={doUserRegistration}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
