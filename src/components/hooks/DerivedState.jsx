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
                {users.map((setUsers, index) => {
                    return (
                        <>
                            <li key={index}>
                                {setUsers.name} - {setUsers.age} years old.
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}