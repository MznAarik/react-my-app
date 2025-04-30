import { useState } from 'react'
import "./Challenge.css"

export const Controlled = () => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // const dataValue = document.querySelector("#inputName").value;
        // console.log(dataValue);

        console.log(name);

    }

    return (
        <section className="container">
            <h2>Controlled Components</h2>
            <form onSubmit={handleSubmit}>
                <div className="controlled">
                    <label>
                        Name:
                        <input id="inputName" name="name" type="text" value={name} onChange={handleChange} />
                    </label>
                    <button type='submit' className='btn'>Submit</button>
                </div>
            </form>

        </section>
    )

}
