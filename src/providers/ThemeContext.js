import { createContext, useContext, useState } from "react";

// What is happening here, step by step:
// 1. A context object is created through React.createContext
// 2. A provider function is created to put together the wrapper
// 3. A useState is initiated to give us a state variable(s)
// 4. The wrapper is added as a return value to the provider function
// 5. That wrapper is the context, and the context is given the state as its first value
// 6. The wrapper receives a function to change the state value as its second value
// 7. The provider wrapper is exported for use elsewhere
// 8. The useTheme object is created and exported so that other files can use the state variable(s) that have been created

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")
    
    return (
        <ThemeContext.Provider 
        value={{
        theme, 
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
