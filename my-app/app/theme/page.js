
'use client';
//Dans cet exemple le useContext va nous servir à changer le background sur toutes les pages dans lequelles on utilise le context : si je cswitch sur la page contact, cela switch aussi sur la page cv (manière de gérer le drakmode facilement) 
import { useState, createContext, useContext} from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
    const [background, setBackground] = useState('lightgreen')

    return(
        <ThemeContext.Provider value={{ background, setBackground}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useThemeContext = () => useContext(ThemeContext)