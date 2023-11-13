// SignIn.tsx
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SignUp from "./SignUp"; 

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign In
      </Button>
      {showSignUp && <SignUp onClose={handleToggleSignUp}/>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>connect</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email address and password to connect.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password1"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign In</Button>
        </DialogActions>
        <DialogActions>
          <Button onClick={handleToggleSignUp}>Switch to Sign Up</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
