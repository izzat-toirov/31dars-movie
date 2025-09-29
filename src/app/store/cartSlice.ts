import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMovie } from "../../entities/movie";

export type ICartMovie = IMovie & {
  quantity: number;
};

interface IMoviesState {
  value: ICartMovie[];
}

const initialState: IMoviesState = {
  value: JSON.parse(localStorage.getItem("cart") || "[]")
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<IMovie>) => {
      const index = state.value.findIndex((item) => item.id === action.payload.id);

      if (index >= 0) {
        state.value = state.value.filter((item) => item.id !== action.payload.id);
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    }
  }
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
