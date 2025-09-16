import { createContext } from "react";

export const BioContext = createContext()

export const BioProvider = ({ children }) => {

    const myName = "Duzeso";
    const myAge = 24;

    console.log(children)
    return <BioContext.Provider value={{ myName:myName, myAge:myAge }}>
        {children}
    </BioContext.Provider>
}

