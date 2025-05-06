import { useEffect, useState } from "react"
import "./pokemon.css"


export const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)
            })
            .catch((error) => console.log(error))

    }, []) //useEffect dependency only hepls the api to call once

    return (
        <div className="container">
            <ul>
                data:
                {
                    apiData.map((data) => {
                        return <li key={data.id} >{data.title}</li>
                    })
                }
            </ul>
        </div>
    )
}