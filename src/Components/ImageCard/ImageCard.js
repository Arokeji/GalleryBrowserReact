

const ImageCard = ({img, action}) => {

    return (
        <div onClick={() => action(img)}>
            <img src={img.src.tiny} alt={img.alt} />
            <p>{img.alt}</p>
        </div>
    )
}

export default ImageCard; 