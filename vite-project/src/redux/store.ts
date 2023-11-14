import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './projectsSlice'
export  const store = configureStore({
  reducer: {
    products: ProductsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


