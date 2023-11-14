import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../components/types';


interface ProductState {
    product1: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images?: string[];
        times_chosen?: number,
        cart?: boolean
    },
    product2: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images?: string[];
        times_chosen?: number,
        cart?: boolean
    }
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
    images: [''],
    times_chosen: 1,
    cart: false
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
    images: [''],
    times_chosen: 1,
    cart: false
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

