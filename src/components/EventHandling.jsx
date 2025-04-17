export const EventHandling = () => {

    // function handleButtonClick() {   //normal function
    //     alert(`Hey! You clicked Click Me!`)
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert(`Hey, You clicked Click Me!`);
    }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, You clicked welcome`)
    }
    return (
        <>
            <button onClick={handleButtonClick}>Click Me!</button>
            <button onClick={(event) => handleButtonClick(event)}>Click Me-2!</button>
            <button onClick={(event) => console.log(event)}>Inline function</button>
            <button onClick={() => alert(`You clicked Inline arrow function`)}> Inline event</button>

            <button onClick={() => handleWelcomeUser("Venom")}>Welcome</button>
            <button onClick={() => handleWelcomeUser("Ram")}>Welcome</button>
        </>
    )
}   