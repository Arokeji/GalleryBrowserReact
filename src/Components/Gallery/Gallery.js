import './Gallery.scss';
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { ThemeContext } from '../../App';

//Inicializador (el state original)
const initFavorites = {
    favorites: []
};

 //Reducer
 const reducer = (state, action) => {
    const newState = {...state};

    switch (action.type) {
        case "ADD FAVORITE":
            const newFavorite = action.payload;
            newState.favorites = [...newState.favorites, newFavorite];
            break;
        
        case "DELETE FAVORITE":
            //Hacer un filter de la lista
            break;

        default:
                console.error("La accion no esta registrada");
    }

    return newState;
}

const Gallery = ({ info }) => {

    //Contextos
    const theme = React.useContext(ThemeContext);

    //Reducer
    const [state, dispatch] = React.useReducer(reducer, initFavorites);

    //Memo
    const orderPhotos = React.useMemo(() => {
        let photosOrdered = null;

        if (info) {
            photosOrdered = info.photos.sort((a, b) => {
                return a.alt < b.alt ? -1 : 1;
            });
        }

        return photosOrdered;
    }, [info]);

    return (
        <div style={{ background: theme.background, color: theme.fontColor }}>
            {info ? <p>Resultados de la busqueda</p> : <div></div>}
            {
                orderPhotos?.map((img) => {
                    return (
                        <ImageCard
                            key={img.id}
                            img={img}
                            action={() => dispatch({type: "ADD FAVORITE", payload: img})}
                        />
                    );
                })
            }

            {state.favorites.length === 0 ? <p>No hay favoritos</p> : <p>Fotos guardadas en favoritos</p>}
            {
                state.favorites ?
                    state.favorites.map((img) => {
                        return (
                            <ImageCard
                                key={img.id}
                                img={img}
                                action={() => dispatch({type: "DELETE FAVORITE", img: {img}})}
                            />
                        );
                    }) :
                    <p>"No hay favoritos"</p>
            }
        </div>
    );
}

export default Gallery;