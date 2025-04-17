export const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("GrandParent Clicked");
        event.stopPropagation();
    }

    const handleParent = () => {
        console.log("Parent Clicked");
        event.stopPropagation();
    }

    const handleChild = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("Child Clicked");
    }

    return (
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParent}>
                    <button className="c-div" onClickCapture={handleChild}>Child Div</button>
                </div>
            </div>
        </section>
    )

}