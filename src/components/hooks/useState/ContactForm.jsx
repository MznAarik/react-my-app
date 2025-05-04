import { useState } from "react";
import "./Challenge.css"

const ContactForm = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     try {
    //         const submitData = {
    //             username,
    //             email,
    //             message,
    //         }
    //         console.log(submitData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    //otherway

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setContact((prev) => ({
            ...prev, [name]: value,
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(contact);
    }

    return (
        <>
            <div className="container">
                <div className="login-card">
                    <h2>Contact Form</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" required autoComplete="off"
                            value={contact.username}
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" required autoComplete="off"
                            value={contact.email}
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required autoComplete="off" rows={3}
                            value={contact.message}
                            // value={message}
                            // onChange={(e) => setMessage(e.target.value)}
                            onChange={handleInputChange}
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm