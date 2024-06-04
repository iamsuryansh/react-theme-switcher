import { createContext, useState, useEffect, Children } from "react";
import { useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    )
}