import { FavType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface favoriteState {
  value: FavType[];
}

const initialState: favoriteState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavList: (state, action: PayloadAction<FavType>) => {
      const itemCheck = state.value.some(
        (elm) => elm.imdbID === action.payload.imdbID
      );
      if (!itemCheck) {
        state.value.push(action.payload);
      }
    },
    RemoveFromFavList: (state, action) => {
      state.value = state.value.filter((elm) => elm.imdbID !== action.payload);
    },
  },
});

export const { addToFavList, RemoveFromFavList } = favoriteSlice.actions;

export default favoriteSlice.reducer;
