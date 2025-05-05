import { useState } from "react";
import "../projects/ToDo/Todo.css"

// const [count, setCount] = useState(0);


export const State = () => {
    // let value = 0;
    // const handleClickButton = () => {
    //     value++;
    //     console.log(value);

    // let array = useState();
    const [count, setCount] = useState(0);

    const handleBUttonClick = () => {
        setCount(() => count + 1);
        console.log("Parent Component Rerendered");
    }

    return (
        <>
            <section className="todo-container">
                <div className="state-container">
                    <h1>{count}</h1>
                    <button onClick={handleBUttonClick}>Increment</button>
                </div>
                <ChildComponent count={count} className="child" />
            </section>
        </>
    );

};

function ChildComponent({ count }) {
    console.log("Child Component Rerendered ");
    return (
        <div className="child-div">
            <h2 align="center">Child Component {count}</h2>
        </div>
    )
}
