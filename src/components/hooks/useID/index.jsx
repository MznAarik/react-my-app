import { useId, useState } from "react";

export const UseID = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const id = useId();

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className="container">

            <form onSubmit={handleFormSubmit}>
                <div className="text-white">
                    <label htmlFor={id + "usernameId"}>Username:</label>
                    <input type="text" id={id + "usernameId"} name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="text-white">
                    <label htmlFor={id + "emailId"}>Email:</label>
                    <input type='email' id={id + "emailId"} name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="text-white">
                    <label htmlFor={id + "passwordId"}>Password:</label>
                    <input type="password" id={id + "passwordId"} name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}