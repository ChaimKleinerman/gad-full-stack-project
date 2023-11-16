import { Box, Stack, Typography } from "@mui/material";
import { Product } from "../../typse/typse";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Prod5() {
  const [allCategories, setallCategories] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setallCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Box>
      <Typography variant="h5" align="center" style={{ margin: "20px 0" }}>
        Top 5 products
      </Typography>
      <Stack direction="row">
        {allCategories.slice(0, 5).map((category, index) => (
          <Link
            key={index}
            style={{
              width: "400px",
              height: "200px",
              color: "white",
              background: "#09056a",
              textDecoration: "none",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "2px",
              display: "flex",
              flexDirection: "column", // Align text and image vertically
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            to={`/product/${category.id}`}
          >
            <img
              src={category.thumbnail}
              alt={category.title}
              width={"100px"}
            />
            <div style={{ textAlign: "center" }}>{category.title}</div>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}


