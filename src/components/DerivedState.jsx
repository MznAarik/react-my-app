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

    console.log(users);
    const userCount = users.length

    const avgAge = (users.reduce((accum, curlElem) => accum + curlElem.age, 0) / userCount)

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
            Total Users: {userCount} <br />
            Average: {avgAge}
        </div>
    )
}