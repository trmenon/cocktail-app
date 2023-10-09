import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {fetchCocktailById} from '../reducers/slices/cocktailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components';
import "./Cocktail.styles.scss";

export const Cocktail = ()=> {
    const {selected, loading} = useSelector((state)=> ({...state.app}));
    const dispatch = useDispatch();
    const {id} = useParams();

    React.useEffect(()=> {
        dispatch(fetchCocktailById({id}));
    }, [id]);
    React.useEffect(()=> {
        console.log(selected);
    }, [selected])

    return(
        <React.Fragment>
            <div className="cocktail-wrapper">
                {
                    loading && (<div className="loader-canvas"><Loader/></div>)
                }
                {
                    !loading && (              
                        <div className="cocktail-header">
                            <h3>{selected?.drink}</h3>
                            <div className='right-wing'>
                                <h6>{selected?.category}</h6>
                                <h6>
                                    {selected?.alchoholic? 'Alchoholic': 'Non Alchoholic'}
                                </h6>
                            </div>
                            
                        </div>
                    )
                }
                {
                    !loading && (              
                        <div className="cocktail-image">
                            <img 
                                src={selected?.imageUrl}
                                width={'360px'}
                                height={'360px'}
                                alt={'cocktail-image'}
                            />
                        </div>
                    )
                }
                {
                    !loading && (              
                        <div className="cocktail-perparation">
                            <h6>{selected?.preparation}</h6>
                            <p>{`Served in ${selected?.glass_type}`}</p>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}