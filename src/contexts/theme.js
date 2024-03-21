import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "",
    themeModeHandler: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

// creating custom hook so that I don't have to import ThemeContext and useContext everytime to extract ThemeContext values  
export default function useTheme(){
    return useContext(ThemeContext);
};