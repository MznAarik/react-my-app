import { useReducer } from "react"

export const ReducerComp = () => {
    // const [count, setCount] = useState(0)

    const initialState = {
        count: 0,
        inc: 2,
        dec: 2
    }

    const reducer = (state, action) => {
        // if (action.type === "INCREMENT") {
        //     return state + 1
        // }
        // if (action.type === "DECREMENT") {
        //     return state - 1
        // }
        // if (action.type === "RESET") {
        //     return state = 0;
        // }

        console.log(state, action)
        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count + 1
                };

            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - 1
                };

            case "RESET":
                return {...state, count: 0 };

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className="p-4 flex flex-col justify-center text-white items-center">
                <h1 className="p-10 text-3xl">{state.count}</h1>
                <div className="buttons">

                    <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                </div>
            </div> 
        </>)
}