import { useState } from "react";

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Blice", age: 24 },
//     { name: "Creata", age: 22 },
//     { name: "Doland", age: 20 },
// ];
export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Blice", age: 24 },
        { name: "Creata", age: 22 },
        { name: "Doland", age: 20 },
    ]);

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {users.map((users, index) => {
                    return (
                        <>
                            <li key={index}>
                                {users.name} - {users.age} years old.
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}