import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import React from 'react';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const StatusLogsAndCart = () => {
    return (
        <Box sx={containerStyle}>
            <IconButton style={iconButtonStyle}>
                <ShoppingCartCheckoutIcon />
            </IconButton>
            <Box style={textBoxStyle}>
                Hello Guest
                <br />
                <Link href="#" style={linkStyle}>
                    Login
                </Link>
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
