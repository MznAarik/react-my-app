import { useContext } from "react"
import { BioContext } from "."

export const About = () => {
    const { myName, myAge } = useContext(BioContext)

    return (
        <h1 className="text-white"> Context API: About {myName} of age {myAge}</h1>
    )
}
