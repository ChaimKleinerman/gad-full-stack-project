import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../typse/typse';

interface ProductState {
  product1: Product,
  product2: Product,
  count: number
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
  },
  count: 0
}

export const ProductsSlice = createSlice({
  name: 'myProduct',
  initialState,
  reducers: {
    saveProduct1: (state, action: PayloadAction<Product>) => {
      state.product1 = action.payload;
      if (state.product1.brand === 'string') {
        console.log('fail');
      }
      else console.log('succesfull');

    },
    saveProduct2: (state, action: PayloadAction<Product>) => {
      state.product2 = action.payload;
    },
    rialCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    addCount: (state) => {
      state.count += 1;
    },
    reduceCount: (state) => {
      state.count > 1 ?
        state.count -= 1 : state.count = 0
    },
  }
})

export const { saveProduct1, saveProduct2, addCount, reduceCount, rialCount } = ProductsSlice.actions;
export default ProductsSlice.reducer


