import { useId, useRef } from "react";


export const ForwardRefs = () => {
    const username = useRef();
    const password = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    };

    const AfterReact19 = ({ label, type, ref }) => {
        const id = useId();
        return (
            <div >
                <label className="text-white" htmlFor={id}>{label}</label>
                <input id={id} type={type} ref={ref} />
            </div>
        );
    };

    return (
        <div className="outline-3 outline-blue-300 rounded-t-3xl w-sm p-10">
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }} >
                <AfterReact19 label="Username" ref={username} type="text" />
                <AfterReact19 label="Password" ref={password} type="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );



};
