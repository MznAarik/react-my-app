export const EventHandling = () => {

    const handleButtonClick = () => {
        alert("Hey! I am onClick Event");
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Me!</button>
        </>
    )
}