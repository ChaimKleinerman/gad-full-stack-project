// import { useAppDispatch } from "../../redux/hooks";
// import { useAppSelector } from "../../redux/hooks";
// import { saveProduct1, saveProduct2 } from "../../redux/projectsSlice";
// import { Product } from "../../typse/typse";

// export const emptyProduct: Product = {
//     id: 0,
//     title: 'empty',
//     description: 'empty',
//     price: 0,
//     discountPercentage: 0,
//     rating: 0,
//     stock: 0,
//     brand: 'empty',
//     category: 'empty',
//     thumbnail: 'empty',
//     images: [''],
// }

// export function saveProdInRedux(chosenProduct: Product) {
//     const dispatch = useAppDispatch();
//     const product1 = useAppSelector((state) => state.products.product1);
//     const product2 = useAppSelector((state) => state.products.product2);

//     if (product1.id !== 0) {
//         if (product2.id === 0) {
//             dispatch(saveProduct2(chosenProduct))
//         }
//     }

//     if (product1.id !== 0 && product2.id !== 0) {
//         dispatch(saveProduct2(emptyProduct))
//         dispatch(saveProduct1(emptyProduct))
//     }
// }

// export function checkProductId() {
//     const product1 = useAppSelector((state) => state.products.product1);
//     const product2 = useAppSelector((state) => state.products.product2);
//     if (product1.id !== 0) {
//         if (product2.id === 0) {
//             console.log('product2 is empty');
//             return true
//         }
//     }
//     return false
// }

// export function LinkChanger() {
//     const product1 = useAppSelector((state) => state.products.product1)
//     const product2 = useAppSelector((state) => state.products.product2)
//     let myString = "/product/:1";
//     if (product1.id !== 0) {
//         if (product2.id === 0) {
//             myString = "/compare"
//             return myString
//         }
//     }
//     return myString
// }


