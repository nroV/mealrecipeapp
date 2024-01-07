import { createSlice } from "@reduxjs/toolkit";

const initState = {
  id: [],
};

const favoriteSlice = createSlice({
  name: "Favorite",
  initialState: initState,
  reducers: {
    AddFavorite(state, action) {
      state.id.push(action.payload);
    },
    RemoveFavorite(state, action) {
   
      const index = state.id.indexOf(action.payload);
      state.id.splice(index, 1);
    },
  },
});

export const { AddFavorite, RemoveFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
