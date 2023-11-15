<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import React from "react";
import { IconButton, Typography, useTheme, styled } from "@mui/material";
import Box from "@mui/material/Box";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SignIn from "./mui/SignIn";
import SignUp from "./mui/SignUp";
import HomeIcon from "@mui/icons-material/Home";
import { Theme } from "@mui/material/styles";


const Link = styled(RouterLink)<{ theme: Theme }>(({ theme }) => ({
  color: "white",
  marginRight: "10px",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StatusLogsAndCart = () => {
  const [flag, setFlag] = React.useState(false);
  const theme = useTheme(); 

  return (
    <Box sx={containerStyle}>
      <Box>
        <Link to={`/cart`} theme={theme}>
          <ShoppingCartCheckoutIcon />
        </Link>

        <Box sx={textBoxStyle}>
          Hello Guest
          <br />
          <SignIn setFlag={setFlag} />
          <SignUp flag={flag} setFlag={setFlag} />
=======
import { BrowserRouter as Router, Routes, Link, Route, useParams } from 'react-router-dom'
import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SignIn from './mui/SignIn';
import SignUp from './mui/SignUp';

const StatusLogsAndCart = () => {
    const [flag, setFlag] = React.useState(false);
    const [storage, setStorage] = useState(false)
    const signOut = () => {
        localStorage.removeItem('email');
        setStorage(prev => !prev)
        console.log(localStorage.getItem('email'));
    }
    return (
        <Box sx={containerStyle}>
            <Link
                style={iconButtonStyle}
                to={`/cart`}>
                <ShoppingCartCheckoutIcon />
            </Link>
            {/* <Box>{localStorage.getItem('email') ? */}
            <Box>{storage ?
                <Box style={textBoxStyle}>
                    Hello User
                    <br />
                    <SignIn setFlag={setFlag} setStorage={setStorage} />
                    <SignUp flag={flag} setFlag={setFlag} />
                </Box>
                :
                <Box style={textBoxStyle}>
                    Hello Guest
                    <br />
                    <Button
                        style={iconButtonStyle}
                        onClick={() => signOut()}
                    >Sign out</Button>
                </Box>}
            </Box>


>>>>>>> 33b6dc601b6993b6a6d144abba90f892284c1214
        </Box>
      </Box>

      <Box sx={storeTitleContainerStyle}>
        <Typography variant="h4" component="div" sx={storeTitleStyle(theme)}>
          Our store
        </Typography>
      </Box>

      <Box>
        <Link to={`/`} theme={theme}>
          <HomeIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  padding: "20px",
  background: "#09056a",
};

<<<<<<< HEAD
=======
const iconButtonStyle = {
    color: 'white',
    cursor: 'pointer'

};

>>>>>>> 33b6dc601b6993b6a6d144abba90f892284c1214
const textBoxStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  color: "white",
};

const storeTitleContainerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const storeTitleStyle = (theme: Theme) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontFamily: "'Pacifico', cursive", 
  marginBottom: "10px",
});

export default StatusLogsAndCart;
