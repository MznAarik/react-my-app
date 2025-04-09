export const EventHandling = () => {

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey! I am onClick Event");
    }

    const handleWelcomeUser = (users) => {
        console.log(`Hey ${users}, Welcome`);
    }
    return (
        <>
            <button onClick={handleButtonClick}>Click Me!</button>
            <br />
            <br />

            <button onClick={(event) => handleButtonClick(event)}>2-Click Me!</button>
            <br />
            <br />

            <button onClick={(event) => console.log(event)}>Inline Function</button>
            <br />
            <br />

            <button onClick={() => alert("Hey I am inline event function")}>Inline Arr function</button>
            <br />
            <br />

            <button onClick={handleWelcomeUser}>Click Me!!</button>
            <br />
            <br />

            <button onClick={() => handleWelcomeUser("Venom")}>Click Me!!</button>
            <br />
            <br />

            <button onClick={() => handleWelcomeUser("Ram")}>Click Me!!</button>
        </>
    )
}