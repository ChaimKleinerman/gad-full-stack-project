// SignUp.tsx
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface SignUpProps {
  onClose: () => void;
}

export default function SignUp({ onClose }: SignUpProps) {
  const [open, setOpen] = React.useState(true);
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const handleClose = () => {
    if (password1 === password2) {
      setOpen(false);
      onClose();
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  const handleChangePassword1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword1(event.target.value);
  };

  const handleChangePassword2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword2(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your email address and password to register.
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
          value={password1}
          onChange={handleChangePassword1}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password2"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
          value={password2}
          onChange={handleChangePassword2}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Sign Up</Button>
      </DialogActions>
    </Dialog>
  );
}
