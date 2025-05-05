import { useEffect, useState } from "react";
import "./index.css"

const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000)
    }, []);
    return (
        <div className="container">
            <h1>Hello, useEffect!</h1>
            <h3>Date: {date}</h3>
            <h3>Count: {count}</h3>
            <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default ReactUseEffect;