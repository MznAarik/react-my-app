// import { createContext, useContext } from "react";

import { createContext, use } from "react";

export const BioContext = createContext()

export const BioProvider = ({ children }) => {

    const myName = "Duzeso";
    const myAge = 24;

    console.log(children)
    return <BioContext.Provider value={{ myName: myName, myAge: myAge }}>
        {children}
    </BioContext.Provider>
}

// Custom Hooks
export const useBioContext = () => {
    const context = use(BioContext);
    if (context === undefined) {
        throw new Error('Component must be wrapped with BioProvider');
    }
    return context
}

