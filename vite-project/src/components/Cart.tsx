import { Box, Typography, Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  // Add other properties as needed
}

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
  const [allCart, setallCart] = useState([]);
  const dispatch = useAppDispatch()
  useEffect(() => {
    const email = localStorage.getItem("email");
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
  }, []);
  const editCart = async (productId: number | null, action: string) => {
    const url = "http://localhost:3000/api/cart";
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
  };
  return (
    <Box>
      <Typography variant="h3">Cart</Typography>
      <Stack spacing={2}>
        {allCart[0] &&
          allCart[0].map((product: Product, index: number) => (
            <Stack key={product.id}>
              {product.title} - ${product.price} - Quantity:
              {allCart[1][index]}
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
                  editCart(product.id, "+");
                }}
              >
                +
              </Button>
              <Button
                onClick={() => {
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




