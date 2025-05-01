import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            username,
            password,
        }
        console.log(loginData);

    }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUsername((prev) => ({ ...prev, [name]: value }))
    // }

    return (
        <>
            <div className="container">
                <div className="login-card">
                    <h2>Login Form</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="off" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm