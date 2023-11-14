import { BrowserRouter as Router, Routes, Link, Route, useParams } from 'react-router-dom'
import React from 'react';
import { IconButton } from '@mui/material';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SignIn from './mui/SignIn';
import SignUp from './mui/SignUp';

const StatusLogsAndCart = () => {
    const [flag, setFlag] = React.useState(false);
    return (
        <Box sx={containerStyle}>
            <Link
                style={iconButtonStyle}
                to={`/cart`}>
                <ShoppingCartCheckoutIcon />
            </Link>
            <Box style={textBoxStyle}>
                Hello Guest
                <br />
                <SignIn setFlag = {setFlag} />
                <SignUp flag = {flag} setFlag = {setFlag}/>
            </Box>
        </Box>
    );
};

const containerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '20px',
    background: '#09056a'
};

const iconButtonStyle = {
    color: 'white',
};

const textBoxStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: 'white',
    padding: '5px'
};

const linkStyle = {
    textDecoration: 'underline',
    color: 'white',
    padding: '5px'
};

export default StatusLogsAndCart;