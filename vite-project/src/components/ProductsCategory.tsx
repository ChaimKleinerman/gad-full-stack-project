import BasicCard from "./Card";
import { Product } from "../typse/typse";
import { Box } from "@mui/material";
import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { saveProduct1, saveProduct2 } from "../redux/projectsSlice";
import { emptyProduct } from "./helperFuncsForCompare/helperFuncsForCompare";
import { checkProductId } from "./helperFuncsForCompare/helperFuncsForCompare";


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
  const product1 = useAppSelector((state) => state.products.product1);
  const product2 = useAppSelector((state) => state.products.product2);
  const dispatch = useAppDispatch();

  let flag = checkProductId();

  const saveProd2InRedux = (chosenProduct: Product) => {
    if (product1.id !== 0) {
      if (product2.id === 0) {
        dispatch(saveProduct2(chosenProduct));
      }
    }
    if (product1.id !== 0 && product2.id !== 0) {
      dispatch(saveProduct2(emptyProduct))
      dispatch(saveProduct1(emptyProduct))
    }
  }

  if (flag === false) {
    if (filterType === "brand") {
      return (
        <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {products.map((product) =>
            product.brand === filter || filter === "" ? (
              <div onClick={() => { saveProd2InRedux(product) }}><Stack key={product.id} sx={{ margin: "20px" }}>
                <Link to={`/product/${product.id}`}><BasicCard product={product} /></Link>
              </Stack></div>
            ) : null
          )}
        </Box>
      );
    }
    else {
      const filterSplitNumber = parseInt(filter.split("-")[1]);
      const filterSplitNumber2 = parseInt(filter.split("-")[0]);

      return (
        <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {products.map((product) =>
            Math.floor(product[filterType]) <= filterSplitNumber &&
              Math.floor(product[filterType]) > filterSplitNumber2 ? (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Stack sx={{ margin: "20px" }}>
                  <BasicCard product={product} />
                </Stack>
              </Link>
            ) : null
          )}
        </Box>
      );
    }
  }

  else if (flag === true) {
    if (filterType === "brand") {
      return (
        <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {products.map((product) =>
            product.brand === filter || filter === "" ? (
              <div onClick={() => { saveProd2InRedux(product) }}><Stack key={product.id} sx={{ margin: "20px" }}>
                <Link to={`/compare`}><BasicCard product={product} /></Link>
              </Stack></div>
            ) : null
          )}
        </Box>
      );
    }
    else {
      const filterSplitNumber = parseInt(filter.split("-")[1]);
      const filterSplitNumber2 = parseInt(filter.split("-")[0]);

      return (
        <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {products.map((product) =>
            Math.floor(product[filterType]) <= filterSplitNumber &&
              Math.floor(product[filterType]) > filterSplitNumber2 ? (
              <Link key={product.id} to={`/compare`}>
                <Stack sx={{ margin: "20px" }}>
                  <BasicCard product={product} />
                </Stack>
              </Link>
            ) : null
          )}
        </Box>
      );
    }
    }
}
