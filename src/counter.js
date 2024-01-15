import React, { useState } from "react";
import './counter.css';

function Counter(){
    const [counter,setCounter] = useState(0);
    const [initialCount, setinitialCount] = useState(0);
     const handleInitialCountChange = (event) => {
       setinitialCount(event.target.value);
    };
    const handleReset = () => {
        setCounter(initialCount);
    };
    return (
        <div className="counter-container">
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <p>Count: {counter}</p>
        </div>

    );
}
export default Counter;