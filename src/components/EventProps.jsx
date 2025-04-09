export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = () => {
        alert(`Item Hovered!!`);
    };

    const WelcomeUser = (props) => {
        const { onclick, onMouseEnter } = props;
        const handleGreeting = () => {
            console.log(`Hey User, Welcome`);
            onclick();
        };
        return (
            <>
                <button onClick={onclick}> Click</button>
                <button onMouseEnter={onMouseEnter}> Hover me</button>
                <button onClick={handleGreeting}> Click</button>
            </>
        )
    }

    return (
        <>
            <WelcomeUser
                onclick={() => HandleWelcomeUser("Venom")}
                onMouseEnter={handleHover}
            />
        </>
    )
}