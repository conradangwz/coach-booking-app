import { createContext } from "react";
import { coaches } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const currencySymbol = '$'

    const value = {
        coaches,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider