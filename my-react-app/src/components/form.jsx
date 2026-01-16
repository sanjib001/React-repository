import { useState } from "react";
import Input from "./input"
import Button from "./button";

const Form = () => {
    // State of component. Stores the input collected from users
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    })

    const [error, setError] = useState("");

    // Change handler. Gets the change from user & pass them to state of the component.
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

     // Submit handler, triggers the action once the submit button is clicked.
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state);
        const isValid = handleValidation();
        if (isValid) {
            alert("Data is ready to submmit")
        }
    }

    const handleValidation = () => {
        if (state.username.length < 3) {
            setError("Username should be atleat 3 characters. ");
            return false;
        }

        if (!state.email.includes("@")) {
            setError("Not a valid email. ");
            return false;
        }

        if (state.password.length < 6) {
            setError("Password should be atlest 6 character long");
            return false;
        }

        if (state.phone.length < 10 || state.phone.length > 15) {
            setError("Phone should be between 10 to 15 character");
            return false;
        }

        return true;
    }
    
    return (
        <>
            <form>
                <Input
                    label="Username: "
                    onChange={handleChange}
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                />
                <Input
                    label="Email: "
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <Input
                    label="Password :"
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
                <Input
                    label="Phone: "
                    onChange={handleChange}
                    type="number"
                    name="phone"
                    placeholder="Enter your phone"
                />
                {error && <div className="danger">{error}</div>}
                <Button onClick={handleSubmit}>Submmit</Button>
            </form>

        </>
    )
}

export default Form;