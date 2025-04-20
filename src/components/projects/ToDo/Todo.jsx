import { useEffect, useState } from "react";
import "./Todo.css";
import { SiGoogletasks } from "react-icons/si";
import { RiDeleteBin6Fill } from "react-icons/ri";



export const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) return;

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    };

    // Date and Time

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <section className="todo-container">
                <div className="main">
                    <header>
                        <h2>Todo List</h2>
                        <h3>{dateTime}</h3>
                    </header>

                    <div className="input-wrapper">
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <input type="text " className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                                <label htmlFor="task">Enter Tasks </label>
                                <button type="submit" className="todo-btn">Add Task</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="btn-container">
                    <ul>
                        {task.map((curTask, index) => {
                            return (
                                <>
                                    <div id="btn">
                                        <li key={index}>{curTask}</li>
                                        <div className="btn">
                                            <button className="check-btn">
                                                <SiGoogletasks />
                                            </button>
                                            <button className="delete-btn ">
                                                <RiDeleteBin6Fill />
                                            </button>
                                        </div>
                                    </div >
                                </>
                            )
                        })}
                    </ul>
                </div>
            </section >
        </>
    )
}

