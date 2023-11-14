import BasicCard from "./Card";
import { Product } from "../typse/typse";
import { Box } from "@mui/material";
import { Stack } from "@mui/joy";

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
            <Stack key={product.id} sx={{ margin: "20px" }}>
              <BasicCard product={product} />
            </Stack>
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
            <Stack  key={product.id} sx={{ margin: "20px" }}>
              <BasicCard product={product} />
            </Stack>
          ) : null
        )}
      </Box>
    );
  }
}
