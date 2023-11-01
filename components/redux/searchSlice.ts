import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface searchState {
  value: string | undefined;
}

const initialState: searchState = {
  value: undefined,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchMovies } = searchSlice.actions;

export default searchSlice.reducer;
