import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";


export const ToDo = () => {

    const [task, setTask] = useState([]);
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        // to check if input field is empty or not
        // if (!inputValue) return;

        // if(task.includes(inputValue)) return;

        if (!content) return;
        //to check if the data is already existing or not 
        const ifTodoContentMatched = task.find((curTask) => curTask.content == content);

        if (ifTodoContentMatched) return;

        // setTask((prevTask) => [...prevTask, { id: id, content: content, checked: checked }]);
        // or you can write as below as per ES6
        setTask((prevTask) => [...prevTask, { id, content, checked }]);

    };

    //handle ToDo deletion
    const handleTodoDelete = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    //handle clearAll button
    const handleClearAll = () => {
        setTask([]);
    }

    // todo handleCheckedTodo functionality
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        })
        setTask(updatedTask);
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
                            {task.map((curTask) => {
                                return (
                                    <TodoList
                                        key={curTask.id}
                                        data={curTask.content}
                                        checked={curTask.checked}
                                        onHandleCheckedTodo={handleCheckedTodo}
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

