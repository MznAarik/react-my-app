
import { SiGoogletasks } from "react-icons/si";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const TodoList = ({ data, checked, onHandleCheckedTodo, onHandleDeleteTodo }) => {
    console.log(data, checked);
    return (
        <>
            <div id="btn">
                <li>
                    <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                </li>
                <div className="btn">
                    <button className="check-btn" onClick={() => onHandleCheckedTodo(data)} >
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