export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}! `);
    }

    const handleHover = () => {
        alert(`You Hovered over the button`)
    }

    return (
        <>
            <WelcomeUser onClick={() => HandleWelcomeUser("Venom")}
                onMouseEnter={handleHover}
            />
        </>
    )
}

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`Hey User, This is greeting`);
        onClick();
    };

    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}