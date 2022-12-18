import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { encryptStorage } from '../utils/encryptStorage';

export default function Login({}) {
  const [open, setOpen] = React.useState(false);
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

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
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
