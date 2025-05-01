import { useState } from "react"
import "./challenge.css"

export default function RegistrationReact() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phoneno: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }))

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account.</p>
                    <div className="reg-form">

                        <label htmlFor="name">
                            <p> Name:
                                <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Enter your  Name" required />
                            </p>
                        </label>

                        <label htmlFor="email">
                            <p>Email:
                                <input type="text" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter your email" required />
                            </p>
                        </label>

                        <label htmlFor="password">
                            <p>Password:
                                <input type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Enter your password" required />
                            </p>
                        </label>

                        <label htmlFor="phone no">
                            <p>Phone no:
                                <input type="text" name="phoneno" value={user.phoneno} onChange={handleInputChange} placeholder="Enter your phone no" required />
                            </p>
                        </label>
                    </div>

                    <button type="submit">Sign Up</button>

                    <section className="summary" style={{ textAlign: "center", marginTop: "20px" }}>
                        <p>
                            Hi! my name is {" "}
                            <span>
                                {user.name}
                            </span>
                            . My email is <span>{user.email}</span> and phone number is <span>{user.phoneno}</span>
                        </p>
                    </section>

                </form>
            </div>
        </>
    )
}
