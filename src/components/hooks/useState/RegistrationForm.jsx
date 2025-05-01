import { useState } from "react"
import "./Challenge.css"

export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(e.target.value);
                break;

            case "email":
                setEmail(e.target.value);
                break;

            case "password":
                setPassword(e.target.value);
                break;

            case "phoneno":
                setPhoneNumber(e.target.value);
                break;
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            password,
            phoneNumber,
        }

        console.log(formData);
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
                                <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Enter your  Name" required />
                            </p>
                        </label>

                        <label htmlFor="email">
                            <p>Email:
                                <input type="text" name="email" value={email} onChange={handleInputChange} placeholder="Enter your email" required />
                            </p>
                        </label>

                        <label htmlFor="password">
                            <p>Password:
                                <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Enter your password" required />
                            </p>
                        </label>

                        <label htmlFor="phone no">
                            <p>Phone no:
                                <input type="text" name="phoneno" value={phoneNumber} onChange={handleInputChange} placeholder="Enter your phone no" required />
                            </p>
                        </label>
                    </div>

                    <button type="submit">Sign Up</button>

                    <section className="summary" style={{ textAlign: "center", marginTop: "20px" }}>
                        <p>
                            Hi! my name is {" "}
                            <span>
                                {name}
                            </span>
                            . My email is <span>{email}</span> and phone number is <span>{phoneNumber}</span>
                        </p>
                    </section>

                </form>
            </div>
        </>
    )
}
