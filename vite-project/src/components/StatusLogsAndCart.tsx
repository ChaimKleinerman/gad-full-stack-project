import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import React from "react";
import { IconButton } from "@mui/material";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import HomeIcon from "@mui/icons-material/Home";

const StatusLogsAndCart = () => {
  return (
    <Box sx={containerStyle}>
      <Box>
        <Link style={iconButtonStyle} to={`/cart`}>
          <ShoppingCartCheckoutIcon />
        </Link>

        <Box style={textBoxStyle}>
          Hello Guest
          <br />
          <Link to={``} style={linkStyle}>
            Login
          </Link>
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
  textAlign: "center",
  padding: "20px",
  background: "#09056a",
  justifyContent:"space-between"
};

const iconButtonStyle = {
  color: "white",
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
