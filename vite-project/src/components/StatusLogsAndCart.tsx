import { BrowserRouter as Router, Routes, Link, Route, useParams } from 'react-router-dom'
import React, { useState } from 'react';
import { Badge, BadgeProps, Button, IconButton, styled } from '@mui/material';
import Box from '@mui/material/Box';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import HomeIcon from '@mui/icons-material/Home'; // Import HomeIcon
import SignIn from './mui/SignIn';
import SignUp from './mui/SignUp';
import { useAppSelector } from '../redux/hooks';
import { Storage } from "../storage";


const StatusLogsAndCart = () => {

  // const count = useAppSelector((state) => state.products.count)
  const [flag, setFlag] = React.useState(false);
  const [storage, setStorage] = useState(true);
  // const [countProducts, setCountProducts] = useState(4)

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const signOut = () => {
    localStorage.removeItem('email');
    setStorage(prev => !prev)
    console.log(localStorage.getItem('email'));
  }
  return (
    <Box sx={containerStyle}>
      <Box>
        <Link
          style={iconButtonStyle}
          to={`/cart`}>
          <StyledBadge badgeContent={count} color="secondary">
            <ShoppingCartCheckoutIcon />
          </StyledBadge>
        </Link>
      </Box>
      {/* <Box>{localStorage.getItem('email') ? */}
      <Box>{Storage() ?
        <Box style={textBoxStyle}>
          Hello Guest
          <br />
          <SignIn setFlag={setFlag} setStorage={setStorage} />
          <SignUp flag={flag} setFlag={setFlag} />
        </Box>
        :
        <Box style={textBoxStyle}>
          Hello User
          <br />
          <Button
            style={iconButtonStyle}
            onClick={() => signOut()}
          >Sign out</Button>
        </Box>}
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

export default StatusLogsAndCart;
