import {configureStore} from '@reduxjs/toolkit';
import CocktailReducer from './slices/cocktailSlice';

export default configureStore({
    reducer: {app: CocktailReducer}
});

