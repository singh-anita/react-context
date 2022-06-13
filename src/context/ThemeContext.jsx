import React, { useState, createContext } from "react";

const ThemeContext = createContext({ dark: false , setTheme: () => {},});

const ThemeContextProvider = ({children}) => {
  const[theme, setTheme] = useState(false)
  const themeChangeHandler =  ()  =>  {
    setTheme(!theme);
  };

  return(
    <ThemeContext.Provider value={{ theme, setTheme, themeChangeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider }