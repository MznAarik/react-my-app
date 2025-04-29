import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {

    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
    }

    return (
        <>
            <div className="form-container">

                <div className="input-wrapper">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                type="text"
                                className="todo-input"
                                autoComplete="off"
                                value={inputValue.content}
                                onChange={(event) => handleInputChange(event.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                            />
                            <label
                                htmlFor="task"
                                className={`floating-label ${focused || inputValue.content ? 'active' : ''}`}
                            >
                                Enter Tasks
                            </label>
                            <button type="submit" className="todo-btn">Add Task</button>
                        </div>
                    </form>
                </div>

            </div>



        </>
    )
}