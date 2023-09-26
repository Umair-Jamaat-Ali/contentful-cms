
const ImageCard = (props) => {
    return (
        <div>
         <div class="facilities-col" style={{margin:"8px"}}>
                <img src={props.pic} alt="" />
                <h3>{props.title} </h3>
                <p>{props.descr} </p>
            </div>  
        </div>
    );
}

export default ImageCard;
