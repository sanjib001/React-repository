import { useState } from "react";

const Input = () => {
    const [username, setUsername] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value)
        setUsername(event.target.value)
    }

    return (
        <>
            <label>Username: </label>
            <input onChange={handleChange} type="text" placeholder="Enter Your Username" />
            <div>
                Username typed: {username}
            </div>
        </>
    )
}

export default Input;