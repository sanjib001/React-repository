import { useState } from "react";

const Input = () => {
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
            <div>
                <label>Username: </label>
                <input onChange={handleChange} name="username" type="text" placeholder="Enter Your Username" />
            </div>
             <div>
                <label>Email: </label>
                <input onChange={handleChange} name="email" type="email" placeholder="Enter Your email" />
            </div>
             <div>
                <label>Password: </label>
                <input onChange={handleChange} name="password" type="text" placeholder="Enter Your Password" />
            </div>
             <div>
                <label>Phone: </label>
                <input onChange={handleChange} name="phone" type="text" placeholder="Enter Your phone" />
            </div>
            <div>
                Username : {state.username}<br/>
                emial : {state.email}<br/>
                Password : {state.password}<br/>
                phone: {state.phone}
            </div>
        </>
    )
}

export default Input;