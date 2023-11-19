import { Box, Typography, Button, Grid, IconButton, Stack, Hidden } from "@mui/material";
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
  quantity?: number;
  // Add other properties as needed
}
export default function Cart() {
  const dispatch = useAppDispatch()
  const countProducts = useAppSelector((state) => state.products.count);

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
          console.log('0');
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
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h3"
          sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          CART
        </Typography>
        <Stack spacing={2}>
          {allCart[0] &&
            allCart[0].map((product: Product, index: number) => (
              <Grid
                key={product.id}
                container
                spacing={2}
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "0px",
                }}
              >
                <Grid item xs={2}>
                  <Typography variant="body1">{product.title}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={product.thumbnail}
                    width="100px"
                    alt="product image"
                    style={{ borderRadius: "5px" }} />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">{product.price}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        dispatch(addCount());
                        editCart(product.id, "+");
                      }}
                    >
                      +
                    </Button>
                    <Grid item xs={0}>
                      <Typography variant="body1">{Storage() ? product.quantity : allCart[1][index]}</Typography>
                    </Grid>
                    <Button
                      onClick={() => {
                        dispatch(reduceCount());
                        editCart(product.id, "-");
                      }}
                    >
                      -
                    </Button>
                    <IconButton
                      onClick={() => {
                        editCart(product.id, "remove");        
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Button
                      onClick={() => {
                        editCart(product.id, "delete")
                      }}>
                      Clear Cart
                    </Button>
                    <Button
                      onClick={() => {
                        editCart(product.id, "delete")
                      }}>
                      Checkout
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ))}
        </Stack>
      </Box>
    </>
  );
}
