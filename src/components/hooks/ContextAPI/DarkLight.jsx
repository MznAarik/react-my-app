import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const DarkLight = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    return (
        <div className={`p-6 rounded-xl flex flex-col items-center gap-5 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <h1>Dark and Light Mode switch toggle</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque!</p>
            <button onClick={handleToggleTheme}>
                Switch to {theme === "dark" ? "light" : "dark"}
            </button>
        </div>
    );
};
