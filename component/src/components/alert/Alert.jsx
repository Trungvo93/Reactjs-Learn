const Alert = (props) =>{
    return (
        <div className={props.className} role={props.role}>
            <span>{props.text}</span>
        </div>
    )
}

export default Alert;