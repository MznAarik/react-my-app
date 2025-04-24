import { useState } from "react"

const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <>
            <input type="text" placeholder="Enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </>
    )
}

const DisplayComponent = ({ inputValue }) => {
    return (
        <>
            <h2>You entered: {inputValue}</h2>
        </>
    )
}


export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    console.log({ inputValue });
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
}