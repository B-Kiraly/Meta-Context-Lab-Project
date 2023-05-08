import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined)

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        name: "Alex",
        email: "dirt.fungus@gmail.com",
        dob: "20/01/1997"
    })

    // Incorporate this into the values of the provider when you get the chance
    const userSwap = () => {
        setUser({
            name: "Abby",
            email: "AbbsterBomb@hotmail.com",
            dob: "15/01/1998"
        })
    }

    return (
        <UserContext.Provider value={{user, userSwap}}>
            {children}
        </UserContext.Provider>
        )
}

// This is a custom hook, to make it so that this file does not need
// to be imported by other components. 
export const useUser = () => useContext(UserContext)
