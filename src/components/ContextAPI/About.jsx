import { use } from "react"
import { BioContext } from ".";
// import { BioContext, useBioContext } from "."

export const About = () => {
    // const { myName, myAge } = useContext(BioContext)
    // const {} = useBioContext();
    const { myName, myAge } = use(BioContext);


    return (
        <section className="p-6 font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white">
            <h1 className="text-white"> Context API in About: {myName} of age {myAge}</h1>
        </section>
    )
}
