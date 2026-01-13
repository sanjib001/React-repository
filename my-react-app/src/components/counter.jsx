import { useState } from "react";

const Counter = () => {
    //let count = 0;
    const [count, setCount] = useState(0);
    //First one is name of the variable,
    // second one is function that is used to update/change the variable value.

    const handelIncrease = () => {
        console.log("Increase Button called!!");
        setCount(count + 1)
    }
    const handeldecrease = () => {
        console.log("decrease Button called!!");
        setCount(count - 1)
    }

    console.log("Rerendered again!");

    return (
        <>
            <h1>Count value: {count}</h1>
            <button onClick={handelIncrease}>Increase</button>
            <button onClick={handeldecrease}>Decrease</button>
        </>
    )
}

export default Counter;