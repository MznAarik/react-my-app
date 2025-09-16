import { useContext } from "react"
import { BioContext } from "."

export const Home = () => {

    const { myName, myAge } = useContext(BioContext)

    return (
        <h1 className="text-white">Hello! Its context API. My name is {myName}. Im {myAge} yrs old.</h1>
    )
}
