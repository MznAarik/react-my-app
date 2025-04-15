import { useState } from "react";

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
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={handleBUttonClick}>Increment</button>
            </section>
            <ChildComponent count={count} />
        </>
    );

};

function ChildComponent({ count }) {
    console.log("Child Component Rerendered ");
    return (
        <div className="child-div">
            <h2>Child Component {count}</h2>
        </div>
    )
}
