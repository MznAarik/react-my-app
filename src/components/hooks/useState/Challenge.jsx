import { useState } from "react";
import "./challenge.css"


const CounterChallenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setCount(count + step);
    }

    const handleDecrement = () => {
        setCount(count - step);
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div className="container">
            <h2 align="center">UseState Challenge</h2>

            <h3 align="center">
                Count: <span>{count}</span>
            </h3>

            <label className="label-step" htmlFor="number" value={step} onChange={(e) => setStep(Number(e.target.value))}>
                Step:
                <input className="step-input" type="number" value={step} />
            </label>
            <div className="grid-three--cols">
                <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}


export default CounterChallenge;