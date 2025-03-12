
const name = "KungFu Hustle 2";
const rating = 8.2;
const summary = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, placeat! Suscipit eos, voluptate et ducimus impedit voluptates ipsam veritatis animi cupiditate odio unde ipsa aliquid aliquam quod iure maiores consectetur"
const returnGenre = () => {
    const genre = "ROMCOM"
    return genre;
};
const age = 18;

const NetflixSeries = () => {
    return (
        <>
            <div>
                <img src="cover.jpg" alt="images" width="30%" />
            </div>
            <h2> Name: {name} </h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {summary}</p>
            <p>Genre: {returnGenre()}</p>
            <button id="btn">{age >= 18 ? "Watch Now!" : "Not Available"}</button>
        </>
    )
};

export default NetflixSeries;



export const Header = () => {
    return (
        <p>Header @ 2025</p>
    );
}
export const Footer = () => {
    return (
        <p>CopyRight @ 2025</p>
    );
}
