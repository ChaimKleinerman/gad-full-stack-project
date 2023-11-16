import { Box, Typography, Button, Grid, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { Storage } from "../storage";
// import { Product } from '../typse/typse';
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { saveProduct1, addCount, reduceCount } from '../redux/projectsSlice';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number
  // Add other properties as needed
}
export default function Cart() {
  const dispatch = useAppDispatch()

  const [allCart, setallCart] = useState<any[]>([]); // Adjust type if possible
  const email = localStorage.getItem("email");

  function getData() {

    if (Storage()) {
      const data = localStorage.getItem('cart');
      console.log('qwertyuicart:', data);

      const parsedData = data ? JSON.parse(data) : [];
      setallCart([parsedData]);
      console.log('ertyuiallCart', parsedData);
    }
    else {
      const url = "http://localhost:3000/api/cart/get";
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
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        })
        .then((data) => {
          console.log("PUT request succeeded with data:", data);
          setallCart(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const editCart = async (productId: number | null, action: string) => {

    if (Storage()) {
      const cartString = localStorage.getItem('cart');
      const cart = cartString ? JSON.parse(cartString) : [];

      const existingProductIndex = cart.findIndex((item: Product) => item.id === productId);

      if (existingProductIndex !== -1) {
        // Product is in the cart
        if (action === '+') {
          cart[existingProductIndex].quantity += 1;
        } else if (action === '-') {
          cart[existingProductIndex].quantity -= 1;
        } else if (action === 'remove') {
          cart.splice(existingProductIndex, 1);
        } else if (action === 'delete') {
          localStorage.removeItem('cart');
          setallCart([]);
          return;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        setallCart([cart]);
      }
    } else {

      const url = "http://localhost:3000/api/cart/update";
      const data = {
        email,
        productId,
        action,
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
            getData();
          }
          throw new Error("Request failed!");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <Box>
      <Typography variant="h3">Cart</Typography>
      <Stack spacing={2}>
        {allCart[0] &&
          allCart[0].map((product: Product, index: number) => (
            <Stack key={product.id}>
              {product.title} - ${product.price} - Quantity:
              {Storage() ? product.quantity : allCart[1][index]}
              <img src={product.thumbnail} loading="lazy" alt="" />
              <Button
                onClick={() => {
                  editCart(product.id, "remove");
                }}
              >
                Remove from Cart
              </Button>
              <Button
                onClick={() => {
                  dispatch(addCount());
                  editCart(product.id, "+");
                }}
              >
                +
              </Button>
              <Button
                onClick={() => {
                  dispatch(reduceCount());

                  editCart(product.id, "-");
                }}
              >
                -
              </Button>
              <Button
                onClick={() => {
                  editCart(product.id, "delete");
                }}
              >
                Clear Cart
              </Button>
            </Stack>
          ))}
      </Stack>
    </Box>
  );
}
