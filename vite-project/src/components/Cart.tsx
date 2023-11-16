import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  // Add other properties as needed
}
export default function Cart() {
  const [allCart, setAllCart] = useState<any[]>([]); // Adjust type if possible
  const email = localStorage.getItem("email");
  function getData() {
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
        setAllCart(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  const editCart = async (productId: number | null, action: string) => {
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
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        CART
      </Typography>
      {allCart[0] &&
        allCart[0].map((product: Product, index: number) => (
          <><Grid
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
                    editCart(product.id, "+");
                  } }
                  sx={{ marginRight: "5px" }}
                >
                  +
                </Button>
                <Grid item xs={0}>
                  <Typography variant="body1">{allCart[1][index]}</Typography>
                </Grid>
                <Button
                  onClick={() => {
                    editCart(product.id, "-");
                  } }
                >
                  -
                </Button>
                <IconButton
                  onClick={() => {
                    editCart(product.id, "remove");
                  } }
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Button
            onClick={() => {
              editCart(product.id, "delete");
            } }
          >
              Clear Cart
            </Button></>
        ))}
    </Box>
  );
}









