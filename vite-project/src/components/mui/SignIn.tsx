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
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { Link } from "@mui/material";
// import { saveProduct1, rialCount } from "../../redux/projectsSlice";
// import { userCount } from "../../storage";
import { useState } from "react";



interface Props {
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
    setStorage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ setFlag, setStorage }: Props) {
    // const sum = 0
    // const count = useAppSelector((state) => state.products.count);

    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);
    // const [countProducts, setCountProducts] = useState([])
    // console.log(countProducts);
    // console.log(countProducts.length);

    // const dispatch = useAppDispatch()

    const handleClose = async (dataLog: any) => {
        console.log('data:', dataLog);
        try {
            const response = await axios.post("http://localhost:3000/api/login", dataLog);
            if (response.status === 200) {
                localStorage.setItem("email", dataLog.email);
                setStorage(prev => !prev);
                console.log('Login success', response.data);
                // const email = localStorage.getItem("email");
                // userCount()
                // .then(data => data.json())
                // .then(data => setCountProducts(data));
                // for (const iterator of countProducts) {
                //     sum += iterator.price
                // }
                // const countData = await userCount();
                // setCountProducts(countData);
                // dispatch(rialCount(count))
                // console.log('count', count);
                setOpen(false);
            } else {
                alert(`Unexpected response status: ${response.status} `);
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            alert(`Unexpected response status: 500`);
            console.error('Error in Axios request:', error);
        }
    };
    const handleClickClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <React.Fragment>
            <Button
                sx={{ color: '#FFFFFF', cursor: 'pointer' }}
                onClick={handleClickOpen} />

            <div style={linkStyle} onClick={handleClickOpen}>
                Sign In
            </div>
            <Dialog open={open} onClose={handleClickClose}>
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
                                variant="outlined">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="outlined">Sign In</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setFlag(true)}
                    >
                        To Sign Up
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
const linkStyle = {
    textDecoration: "underline",
    color: "white",
    padding: "5px",
};
