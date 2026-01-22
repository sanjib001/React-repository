import "./button.css"

const Button = (props) => {
    const { children, type } = props;

    return (
        <button className={`btn btn-${type}`}>{children}</button>
    )
}

export default Button;