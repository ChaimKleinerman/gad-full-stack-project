import { Box, Typography, Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Cart() {
    const [allCart, setallCart] = useState([]);
    const [quantity, setQuantity] = useState([]);

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

                console.log("this allcart", allCart[0]);
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
                setallCart(data[0]);
                console.log("this allcart", allCart);
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
  allCart[0].map((Product, index) => (
    <Stack key={Product.id}>
      {Product.title} - ${Product.price} - Quantity: {allCart[1]}{" "}
      <img src={Product.thumbnail} loading="lazy" alt="" />
      <Button
        onClick={() => {
          editCart(Product.id, "remove");
        }}
      >
        Remove from Cart
      </Button>
      <Button
        onClick={() => {
          editCart(Product.id, "+");
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          editCart(Product.id, "-");
        }}
      >
        -
      </Button>
    </Stack>
  ))}

            </Stack>
            <Button onClick={() => editCart(null, "delete")}>Clear Cart</Button>
        </Box>
    );
}
