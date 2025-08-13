import { useEffect, useState } from "react"
import "./pokemon.css"

export const HowToFetchApi = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/6"

    // const fetchPokemon = () => {

    //     setTimeout(() => {
    //         fetch(API)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setApiData(data);
    //                 setLoading(false);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setError(error);
    //                 setLoading(false);
    //             });
    //     }, 500);
    // }

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json()
            setTimeout(() => {
                setApiData(data)
                setLoading(false)
                console.log(data)
            }, 1000)
        } catch (error) {
            console.log(error.message)
            setError(error)
            setLoading(false)
        }
    }

    console.log(apiData)

    useEffect(() => {
        fetchPokemon();
    }, []) //useEffect dependency only helps the api to call only once

    if (loading) {
        return <div className="loading text-white"> <h1>Loading...</h1></div>
    }

    if (error) {
        return <div className="error"><h1 className="text-white">Error: {error.message}</h1></div>
    }
    return (
        <>
            <header>
                <h2 id="pokemon-h2"> Catch {apiData.name} </h2>
            </header>
            <div className="container">
                <div className="card-demo">
                    <figure className="flex items-center justify-center">
                        <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} />
                    </figure>
                </div>
                <div className="details capitalize text-2xl text-bold">
                    <ul>
                        <li >
                            <p>ID: {apiData.id} </p>
                            <p>Name: {apiData.name} </p>
                            <p>Type: {apiData.types.map((t) => t.type.name)}</p>
                            <p>Moves: {apiData.moves[20].move.name}</p>
                            <div className="flex text-lg gap-2 mt-2">
                                <p>Height: <span>{apiData.height}</span></p>
                                <p>Weight: <span>{apiData.weight}</span></p>
                                <p>speed: <span>{apiData.stats.find((t) => t.stat.name === "speed")?.base_stat}
                                </span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}