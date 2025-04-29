function Profile() {
    return (
        <div>
            <h2>Challenge</h2>
            <ProfileCard
                name='Alice'
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice, Have a beautiful day!</strong>
                    </div>
                }
            >
                <p>Hobies: Reading, Writing</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard
                name='BOB'
                age={30}
                greeting={
                    <div>
                        <strong>Hi BOB!, Have a beautiful day!</strong>
                    </div>
                }
            >
                <p>Hobies: Reading, Writing</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile
function ProfileCard(props) {

    return (
        <>
            <h3>Name:{props.name} </h3>
            <h3>Age: {props.age}</h3>
            <div>{props.greeting}</div>
            <div>{props.children}</div>
        </>
    )

}