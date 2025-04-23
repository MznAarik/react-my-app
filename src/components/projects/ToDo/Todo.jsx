import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";


export const ToDo = () => {

    const [task, setTask] = useState([]);
    const handleFormSubmit = (inputValue) => {
        if (!inputValue) return;
        if (task.includes(inputValue)) {
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue]);
    };

    //handle ToDo deletion
    const handleTodoDelete = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    //handle clearAll button
    const handleClearAll = () => {
        setTask([]);
    }

    return (
        <>
            <section className="todo-container">
                <div className="main">
                    <header>
                        <h2>Todo List</h2>
                        <TodoDate />
                    </header>

                    <TodoForm onAddTodo={handleFormSubmit} />

                    <div className="btn-container">
                        <ul>
                            {task.map((curTask, index) => {
                                return (
                                    <TodoList
                                        key={index}
                                        data={curTask}
                                        onHandleDeleteTodo={handleTodoDelete} />
                                );
                            })}
                        </ul>
                    </div>

                </div >


                <div className="clear-btn" >
                    <button onClick={handleClearAll}> Clear All</button>
                </div>
            </section >
        </>
    )
}

