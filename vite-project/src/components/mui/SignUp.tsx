// SignUp.tsx
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

interface SignUpProps {
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp({ flag, setFlag }: SignUpProps) {
    const { register, handleSubmit } = useForm(); // useForm hook for handling form data
    const [password1, setPassword1] = React.useState("");
    const [password2, setPassword2] = React.useState("");

    const handleClose = async (data: any) => {
        if (password1 === password2) {
            try {
                // Include both email and password in the data object
                const requestData = {
                    email: data.email,
                    password: password1,
                };

                // Make Axios post request with updated data
                await axios.post("http://localhost:3000/api/register", requestData);
                setFlag(false);
            } catch (error) {
                console.error("Error submitting form:", error);
            }
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
        <Dialog open={flag}>
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
                    {...register("email")}
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
                <Button onClick={() => setFlag(false)}>Cancel</Button>
                <Button onClick={handleSubmit(handleClose)}>Sign Up</Button>
            </DialogActions>
        </Dialog>
    );
}
