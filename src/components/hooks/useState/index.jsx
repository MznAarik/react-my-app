import { useState } from "react"
import "../../projects/ToDo/Todo.css"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="todo-container state-container" style={{ textAlign: "center" }}>
            <h1>useState Hook!</h1><br />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}