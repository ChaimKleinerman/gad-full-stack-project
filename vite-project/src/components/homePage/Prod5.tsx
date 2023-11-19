import { Box, Stack, Typography } from "@mui/material";
import { Product } from "../../typse/typse";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveProduct1, saveProduct2 } from "../../redux/projectsSlice";
import { emptyProduct } from "../helperFuncsForCompare/helperFuncsForCompare";

export default function Prod5() {
  const [allCategories, setallCategories] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const product1 = useAppSelector((state) => state.products.product1);
  const product2 = useAppSelector((state) => state.products.product2);

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

  const resetProduct1And2 = () => {
    // if (product1.id !== 0) {
    //   if (product2.id === 0) {
    //     dispatch(saveProduct2(chosenProduct));
    //   }
    // }
    if (product1.id !== 0 && product2.id !== 0) {
      dispatch(saveProduct2(emptyProduct));
      dispatch(saveProduct1(emptyProduct));
    }
  }

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
          onClick={() => {resetProduct1And2}}
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


