import React from "react";
import './Canvas.styles.scss';
import { Loader } from "../loader";
import {useSelector, useDispatch} from 'react-redux';
import {fetchCocktails} from '../../reducers/slices/cocktailSlice';
import { useNavigate } from "react-router-dom";

export const Canvas = ()=> {
    const {cocktails, loading} = useSelector((state)=> ({...state.app}));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(()=> {dispatch(fetchCocktails()); }, []);

    const handleElementView = (event)=> {
        navigate(event.target.value);
    }

    return(
        <div className="canvas-wrapper">            
            {
                loading && (<div className="loader-canvas"><Loader/></div>)
            }
            {
                !loading && 
                Array.isArray(cocktails) &&
                cocktails.length > 0 && (
                    cocktails.map((element)=> {
                        return (
                            <div key={element.idDrink} className="card">
                                <div className="card-header">
                                    <h6>{element.strDrink}</h6>
                                </div>
                                <div className="card-image">
                                    <img src={element.strDrinkThumb} width="180px" height="180px" alt=""/>
                                </div>
                                <div className="card-footer">
                                    <button value={element.idDrink} onClick={handleElementView}>View More</button>
                                </div>
                            </div>
                        )
                    })
                )
            }
                
                
        </div>
    )
}