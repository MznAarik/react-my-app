import React from 'react'

const Practices = () => {
    const students = [2];

    return (
        <>
            {/* <p>{students.length && "No students found"}</p>   VS */}
            {/* <p>{students.length === 0 && "No students found"} </p> */}
            {/* <p>{!students.length && "No students found"} </p> */}
            {/* <p>{Boolean(!students.length) && "No students found"}</p> */}
            <p>Number of students: {students.length}</p>
        </>
    );
}

export default Practices;

