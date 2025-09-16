import { useBioContext } from "."

export const Home = () => {

    const { myName, myAge } = useBioContext();

    return (
        <h1 className="p-5 text-white bg-blue-400">Hello! Its context API. My name is {myName}. Im {myAge} yrs old.</h1>
    )
}
