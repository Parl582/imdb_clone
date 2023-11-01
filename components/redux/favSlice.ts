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
      //   state.value.push(action.payload);
      state.value.push(action.payload);
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavList } = favoriteSlice.actions;

export default favoriteSlice.reducer;
