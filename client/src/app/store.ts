import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import favoritesSlice from './slices/favoriteSlice';

export default configureStore({
    reducer: {
        cart: cartSlice,
        favorites: favoritesSlice
    }
})