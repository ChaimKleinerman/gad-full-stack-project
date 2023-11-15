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


        </Box>
      </Box>

      <Box>
        <Link style={iconButtonStyle} to={`/`}>
          <HomeIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
};

const containerStyle = {
  display: "flex",
  alignItems: "stretch",
  flexDirection: "row",
  justifyContent: "space-between",
  textAlign: "center",
  padding: "20px",
  background: "#09056a",
};

const iconButtonStyle = {
    color: 'white',
    cursor: 'pointer'

};

const textBoxStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  color: "white",
  padding: "5px",
};

const linkStyle = {
  textDecoration: "underline",
  color: "white",
  padding: "5px",
};

export default StatusLogsAndCart;
