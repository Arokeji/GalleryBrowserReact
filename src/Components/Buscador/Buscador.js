import React from 'react';
import useFetch from '../../Hooks/useFetch';
import './Buscador.scss';

const API_URL = 'https://api.pexels.com/v1/search?query=';

const Buscador = ({setInfo}) => {
    //Estados
    const [full_URL, setFull_URL] = React.useState(null);
    
    //Custom Hooks
    const result = useFetch(full_URL);

    //Referencias
    const inputRef = React.useRef();
    
    React.useEffect(() => {
        setInfo(result);
    }, [result, setInfo]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFull_URL(API_URL + inputRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                className='header__input'
                type='text' 
                placeholder='Introduce un texto de búsqueda'
            />
        </form>
    );
}

export default Buscador;