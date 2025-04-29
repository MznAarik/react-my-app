import seriesData from '../../api/seriesData.json';
import { SeriesCard } from '../components/SeriesCard.jsx'
// import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const NetflixSeries = () => {
    return (
        <>
            <h1 className="card-heading">List of Top Netflix Series</h1>
            <ul className="grid grid-three--cols">
                {
                    seriesData.map((curElem) => (
                        <SeriesCard key={curElem.id} data={curElem} />
                    ))
                }
            </ul >
        </>
    );
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

