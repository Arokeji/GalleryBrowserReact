import useFetch from '../../Hooks/useFetch';
import './FavoriteImage.scss';

const API_URL = 'https://api.pexels.com/v1/photos/';

const FavoriteImage = ({img}) => {
    return (
        {
            img
        }
        // <div key={result.id}>
        //     <img src={result.src.tiny} alt={result.alt} />
        //     <p>{result.alt}</p>
        // </div>
    );
}

export default FavoriteImage;