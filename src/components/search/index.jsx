import React, {useState, useEffect} from "react";
import {fetchCocktailsBySearch} from '../../reducers/slices/cocktailSlice';
import { useDispatch, useSelector } from "react-redux";
import './Search.styles.scss';

export const Search = ()=> {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleChange = (event)=> setValue(event.target.value || '');
    const handleSubmit = ()=> dispatch(fetchCocktailsBySearch({query: value}));
    
    return(
        <React.Fragment>
            <div className="search-field">
                <input 
                    type = {'text'}
                    value= {value}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            
        </React.Fragment>
    )
}