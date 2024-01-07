import favoriteReducers from './reducer/FavoriteSlice'
//create store
//put root reducer inside the storre

import { configureStore } from "@reduxjs/toolkit";

export const store= configureStore({
     reducer:{
        favoriteReducer:favoriteReducers
     }
})
