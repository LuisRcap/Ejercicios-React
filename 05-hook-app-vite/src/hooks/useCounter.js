import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    
    const [counter, setCounter] = useState(initialValue);

    const increment = (increase = 1) => {
        setCounter(counter + increase);
    };

    const decrement = (decrease = 1) => {
        if ( counter === 0 ) return;
        setCounter(counter - decrease);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}