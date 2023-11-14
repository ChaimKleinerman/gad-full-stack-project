import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Props {
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ setFlag }: Props) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = React.useState(false);

    const handleClose = async (dataLog: any) => {
        console.log(dataLog);
    
        try {
            const response = await axios.post("http://localhost:3000/api/login", dataLog);
    
            if (response.status === 200) {
                localStorage.setItem("email", dataLog.email);
                console.log('Login success', response.data);
                const email = localStorage.getItem("email");
                console.log(email);
                setOpen(false);
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error in Axios request:', error);
        }
    };
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Sign In
            </Button>

            <Dialog open={open} onClose={() => {}}>
                <DialogTitle>Connect</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your email address and password to connect.
                    </DialogContentText>
                    <form onSubmit={handleSubmit(handleClose)}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            {...register("email")}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            {...register("password")}
                        />
                        <DialogActions>
                            <Button
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">Sign In</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setFlag(true)}>Switch to Sign Up</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}