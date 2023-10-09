import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { CONSTANTS } from '../../constants';



export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async ()=> {
    return fetch(CONSTANTS.api.FETCH_COCKTAILS).then((res)=> res.json());
});
export const fetchCocktailsBySearch = createAsyncThunk("cocktails/fetchCocktailsBySearch", async ({query})=> {
    return fetch(`${CONSTANTS.api.FETCH_COCKTAILS_BY_QUERY}${query}`).then((res)=> res.json());
});
export const fetchCocktailById = createAsyncThunk("cocktails/fetchCocktailById", async ({id})=> {
    return fetch(
            `${CONSTANTS.api.FETCH_COCKTAILS_BY_ID}${id}`
        ).then((res)=> res.json());
});

const cocktailSlice = createSlice({
    name: "cocktails",
    initialState: {cocktails: [], selected: {}, loading: false},
    extraReducers: {
        [fetchCocktails.pending]: (state, action)=> {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action)=> {
            return {...state, loading: false, cocktails: action.payload.drinks}
        },
        [fetchCocktailsBySearch.pending]: (state, action)=> {
            state.loading = true;
        },
        [fetchCocktailsBySearch.fulfilled]: (state, action)=> {
            return {...state, loading: false, cocktails: action.payload.drinks}
        },
        [fetchCocktailById.pending]: (state, action)=> {
            state.loading = true;
        },
        [fetchCocktailById.fulfilled]: (state, action)=> {
            console.log(action.payload.drinks);
            if(action.payload.drinks.length > 0) {
                const chunk = action.payload.drinks[0];
                const cocktail_data = {
                    drink: chunk?.strDrink,
                    alchoholic: chunk['strAlcoholic'] === 'Alcoholic'? true: false,
                    category: chunk?.strCategory,
                    imageUrl: chunk?.strDrinkThumb,
                    glass_type: chunk?.strGlass,
                    preparation: chunk?.strInstructions
                };
                return {...state, loading: false, selected: cocktail_data}
            }
            // return {...state, loading: false, cocktails: action.payload.drinks}
        },
    }
});

export default cocktailSlice.reducer;