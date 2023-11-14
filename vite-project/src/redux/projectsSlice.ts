import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../typse/typse';

interface ProductState {
  product1: Product,
  product2: Product
}

const initialState: ProductState = {
  product1: {
    id: 0,
    title: '',
    description: '',
    price: 1,
    discountPercentage: 1,
    rating: 1,
    stock: 1,
    brand: 'string',
    category: 'string',
    thumbnail: 'string',
    images: ['']
  },
  product2: {
    id: 0,
    title: '',
    description: '',
    price: 1,
    discountPercentage: 1,
    rating: 1,
    stock: 1,
    brand: 'string',
    category: 'string',
    thumbnail: 'string',
    images: ['']
  }
}

export const ProductsSlice = createSlice({
    name: 'myProduct',
    initialState,
    reducers: {
        saveProduct1: (state, action: PayloadAction<Product>) => {
            state.product1 = action.payload;
        },
        saveProduct2: (state, action: PayloadAction<Product>) => {
            state.product2 = action.payload;
        }
    }
})

export const {saveProduct1, saveProduct2} = ProductsSlice.actions;
export default ProductsSlice.reducer


// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// interface projectState {
//   value: JSX.Element|string
// }

// const initialState:projectState = { value: 'Please select project' } 

// const projectSlice = createSlice({
//   name: 'projects',
//   initialState,
//   reducers: {
  
//     chooseProject(state, action: PayloadAction<JSX.Element>) {
//       state.value = action.payload
//     },
//   },
// })

// export const {chooseProject} = projectSlice.actions
// export default projectSlice.reducer