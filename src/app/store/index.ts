import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { authSlice } from '../../features/auth'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
