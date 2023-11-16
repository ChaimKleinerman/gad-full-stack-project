

import { Box, Typography, Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  // Add other properties as needed
}
export default function Cart() {
  const [allCart, setallCart] = useState<any[]>([]); // Adjust type if possible
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
        setallCart(data);
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
    </Box>
  );
}


// import { Box, Typography, Stack, Button } from "@mui/material";
// import React, { useEffect, useState } from "react";

// import BasicCard from "./Card";

// export default function Cart() {
//   const [allCart, setallCart] = useState([]);
  
//   useEffect(() => {
//     const email = localStorage.getItem("email");
//     const url = "http://localhost:3000/api/cart/get";
//     const data = {
//       email: email,
//     };
//     const requestOptions = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     };

//     fetch(url, requestOptions)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Request failed!");
//       })
//       .then((data) => {
//         console.log("PUT request succeeded with data:", data);
//         setallCart(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   const editCart = async (productId: number | null, action: string) => {
//     const url = "http://localhost:3000/api/cart";
//     const data = {
//       email,
//       productId,
//       action,
//     };
//     const requestOptions = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     };

//     fetch(url, requestOptions)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Request failed!");
//       })
//       .then((data) => {
//         console.log("PUT request succeeded with data:", data);
//         setallCart(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <Box>
//       <Typography variant="h3">Cart</Typography>
//       <Stack
//         spacing={0}
//         sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row",}}
//       >
//         {allCart.map((Product) => (
//           <Stack key={Product.id}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 flexDirection: "column",
//                 margin: "10px"
//               }}
//             >
//               <BasicCard product={Product} />
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   width: "500px",
//                 }}
//               >
//                 <Button
//                   onClick={() => {
//                     editCart(Product.id, "remove");
//                   }}
//                   sx={{
//                     fontWeight: "bold",
//                     "&:hover": { fontWeight: "bold" },
//                     "&:focus": { fontWeight: "bold" },
//                     border: "2px solid", // הוסף מסגרת
//                     borderColor: "primary.main", // צבע המסגרת
//                     borderRadius: "5px", // רדיוס הפינות
//                     padding: "5px 10px", // גודל המסגרת
//                   }}
//                 >
//                   Remove from Cart
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     editCart(Product.id, "+");
//                   }}
//                   sx={{
//                     fontWeight: "bold",
//                     "&:hover": { fontWeight: "bold" },
//                     "&:focus": { fontWeight: "bold" },
//                     border: "2px solid",
//                     borderColor: "primary.main",
//                     borderRadius: "5px",
//                     padding: "5px 10px",
//                   }}
//                 >
//                   +
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     editCart(Product.id, "-");
//                   }}
//                   sx={{
//                     fontWeight: "bold",
//                     "&:hover": { fontWeight: "bold" },
//                     "&:focus": { fontWeight: "bold" },
//                     border: "2px solid",
//                     borderColor: "primary.main",
//                     borderRadius: "5px",
//                     padding: "5px 10px",
//                   }}
//                 >
//                   -
//                 </Button>
//               </Box>
//             </Box>
//           </Stack>
//         ))}
//       </Stack>
//       <Button
//         onClick={() => editCart(null, "delete")}
//         sx={{
//           fontWeight: "bold",
//           "&:hover": { fontWeight: "bold" },
//           "&:focus": { fontWeight: "bold" },
//           border: "2px solid",
//           borderColor: "primary.main",
//           borderRadius: "5px",
//           padding: "5px 10px",
//         }}
//       >
//         Clear Cart
//       </Button>
//     </Box>
//   );
// }




