import { useState } from "react";
import Input from "./input"

const Form = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }
    console.log(state);

    return (
        <>
            <Input
                label="Username: "
                onChange={handleChange}
                type="text"
                name="username"
                placeholder = "Enter your username"
            />
            <Input
                label="Email: "
                onChange={handleChange}
                type="email"
                name="email"
                placeholder = "Enter your email"
            />
            <Input
                label="Password :"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder = "Enter your password"
            />
            <Input
                label="Phone: "
                onChange={handleChange}
                type="number"
                name="phone"
                placeholder = "Enter your phone"
            />
        </>
    )
}

export default Form;