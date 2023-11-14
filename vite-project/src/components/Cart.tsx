import { Box, Typography, Stack, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function Cart() {
  const [allCart, setallCart] = useState([])
  const email = localStorage.getItem('email')

  useEffect(() => {
    const url = "http://localhost:3000/api/cart";
    const data = {
      email: email,
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((data) => {
        console.log("PUT request succeeded with data:", data);
        setallCart(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])

  const editCart = async (productId: number | null, action: string) => {
    const url = "http://localhost:3000/api/cart";
    const data = {
      email,
      productId,
      action
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((data) => {
        console.log("PUT request succeeded with data:", data);
        setallCart(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <Box>
      <Typography variant="h3">Cart</Typography>
      <Stack spacing={2}>

        {allCart.map(Product => (
          <Stack key={Product.id}>
            {Product.title} - ${Product.price} - Quantity: {Product.quantity}
            <Button onClick={() => { editCart(Product.id, 'remove') }}>Remove from Cart</Button>
            <Button onClick={() => { editCart(Product.id, '+') }}>+</Button>
            <Button onClick={() => { editCart(Product.id, '-') }}>-</Button>
          </Stack>
        ))}
      </Stack>
      <Button onClick={() => editCart(null, 'delete')}>Clear Cart</Button>
    </Box>
  )
}
