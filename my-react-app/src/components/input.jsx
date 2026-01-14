import styles from "./input.module.css";

const Input = (props) =>{
    const {label, onChange, name, type, placeholder} = props;

    return(
        <div className= {styles["input-wrapper"]}>
            <label>{label}</label>
            <input 
            onChange={onChange}
            name={name}
            type={type}
            placeholder={placeholder}
            />
        </div>
    )
}

export default Input;