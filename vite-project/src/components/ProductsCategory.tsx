
import BasicCard from "./Card";
import { Product } from "../typse/typse";
import { Box } from "@mui/material";
import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";

interface Props {
  products: Product[];
  filter: string;
  filterType: "brand" | "price" | "rating" | "discountPercentage";
}

export default function ProductsCategory({
  products,
  filter,
  filterType,
}: Props) {

  if (filterType === "brand") {
    return (
      <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        {products.map((product) =>
          product.brand === filter || filter === "" ? (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Stack sx={{ margin: "20px" }}>
                <BasicCard product={product} />
              </Stack>
            </Link>
          ) : null
        )}
      </Box>
    );
  } else {
    const filterSplitNumber = parseInt(filter.split("-")[1]);
    const filterSplitNumber2 = parseInt(filter.split("-")[0]);

    return (
      <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        {products.map((product) =>
          Math.floor(product[filterType]) <= filterSplitNumber &&
            Math.floor(product[filterType]) > filterSplitNumber2 ? (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Stack  sx={{ margin: "20px" }}>
                <BasicCard product={product} />
              </Stack>
            </Link>
          ) : null
        )}
      </Box>
    );
  }
}
