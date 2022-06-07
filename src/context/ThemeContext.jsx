import React, { createContext, useState } from "react";
// Context has been created
const ThemeContext = createContext({ dark: false , setTheme: () => {},});

// Provider
const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState({ dark: false})

  // const themeFunction =  ()  =>  {
  //   setTheme(!theme);
  // };

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };