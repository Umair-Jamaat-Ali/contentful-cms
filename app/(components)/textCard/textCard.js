
const TextCard = (props) => {
    return (
        <div>
            <div className="course-col" style={{margin:"8px"}}>
                <h3>{props.title}</h3>
                <p>{props.des}</p>
            </div>
        </div>
    );
}

export default TextCard;
