import React from "react"

const MealsContext = React.createContext()

const todaysMeals = ["Baked Beans & Corn Chips", "Baked Sweet Potatoes w/ Quinoa", "Baked Kale Chips", "Grilled Salmon w/ Steamed Veggies"]

const MealsProvider = ({children}) => {
    const [meals, setMealsList] = React.useState(todaysMeals)

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
    
}

export const useMealsListContext = () => React.useContext(MealsContext)

export default MealsProvider