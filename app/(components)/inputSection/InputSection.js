const InputSection = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.text} required />
        </div>
    );
}

export default InputSection;
