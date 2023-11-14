// import { Box, Button, Stack, Typography } from '@mui/material';
// import { useEffect, useReducer, useState } from 'react';
// import { Product } from '../typse/typse';

// // interface Product {
// //     id: number;
// //     name: string;
// //     price: string;
// // }

// interface CartProduct extends Product {
//     quantity: number;
// }

// const actionTypes = {
//     // ADD_TO_CART: 'ADD_TO_CART',
//     REMOVE_FROM_CART: 'REMOVE_FROM_CART',
//     INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
//     DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
// } as const;

// type ActionTypes = typeof actionTypes;

// type Action = {
//     type: ActionTypes[keyof ActionTypes];
//     Product: Product;
// } | {
//     type: 'CLEAR_CART'
// }


// const cartReducer = (state: CartProduct[], action: Action) => {
//     switch (action.type) {


//         case actionTypes.REMOVE_FROM_CART:
//             return state.filter(Product => Product.id !== action.Product.id);

//         case actionTypes.INCREMENT_QUANTITY:
//             return state.map(Product =>
//                 Product.id === action.Product.id ? { ...Product, quantity: Product.quantity + 1 } : Product
//             );

//         case actionTypes.DECREMENT_QUANTITY:
//             return state.map(Product =>
//                 Product.id === action.Product.id
//                     ? { ...Product, quantity: Product.quantity > 1 ? Product.quantity - 1 : 0 }
//                     : Product
//             ).filter(Product => Product.quantity > 0);

//         case 'CLEAR_CART':
//             return [];
//         default:
//             return state;
//     }
// };

// const ShoppingCart = () => {
//     const [cart, dispatch] = useReducer(cartReducer, []);
//     const [cartProdId, setCartProdId] = useState<number>()
//     const [effectRefresh, setEffectRefresh] = useState(true)

//     useEffect(() => {

//         const url = "http://localhost:3000/api/cart";

//         const data = {
//             email: localStorage.getItem(),
//             product_id: cartProdId
//         };

//         const requestOptions = {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         };
//         fetch(url, requestOptions)
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json();

//                 }
//                 throw new Error("Request failed!");
//             })
//             .then((data) => {
//                 console.log("PUT request succeeded with data:", data);
//                 // setCartProdId(data)
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//             });
//     }, [cartProdId])
//     // useEffect(() => {
//     //     const categories = async () => {
//     //         // fetch all categories
//     //         return await fetch('http://localhost:3000/api/cart',
//     //         met)
//     //     }
//     //     categories().then(data => data.json())
//     //         .then((data) => setCartProd(data))
//     // }, [])


//     const removeFromCart = (Product: Product) => {
//         dispatch({ type: 'REMOVE_FROM_CART', Product });
//     };

//     const incrementQuantity = (Product: Product) => {
//         dispatch({ type: 'INCREMENT_QUANTITY', Product });
//     };

//     const decrementQuantity = (Product: Product) => {
//         dispatch({ type: 'DECREMENT_QUANTITY', Product });
//     };

//     const clearCart = () => {
//         dispatch({
//             type: 'CLEAR_CART'
//         });
//     };

//     return (
//         <Box>
//             <Typography variant="h3">Cart</Typography>
//             <Stack spacing={2}>

//                 {cart.map(Product => (
//                     <Stack key={Product.id}>
//                         {Product.title} - ${Product.price} - Quantity: {Product.quantity}
//                         <Button onClick={() => { removeFromCart(Product) }}>Remove from Cart</Button>
//                         <Button onClick={() => { setCartProdId(Product.id); incrementQuantity(Product) }}>+</Button>
//                         <Button onClick={() => { setCartProdId(Product.id); decrementQuantity(Product) }}>-</Button>
//                     </Stack>
//                 ))}
//             </Stack>
//             <Button onClick={clearCart}>Clear Cart</Button>
//         </Box>
//     );
// };

// export default ShoppingCart;
