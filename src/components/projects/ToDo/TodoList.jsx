
import { SiGoogletasks } from "react-icons/si";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const TodoList = ({ data, onHandleDeleteTodo }) => {
    return (
        <>
            <div id="btn">
                <li>
                    <span>{data}</span>
                </li>
                <div className="btn">
                    <button className="check-btn" >
                        <SiGoogletasks />
                    </button>
                    <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                        <RiDeleteBin6Fill />
                    </button>
                </div>
            </div >
        </>
    )
}