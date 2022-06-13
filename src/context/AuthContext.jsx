import React, { createContext, useState } from "react";
// Context has been created
const AuthContext = createContext(false)
// const ThemeContext = createContext({ dark: false , setTheme: () => {},});

// Provider
// const ThemeContextProvider = ({children}) => {
//   const [theme, setTheme] = useState({ dark: false})

//   // const themeFunction =  ()  =>  {
//   //   setTheme(!theme);
//   // };

//   return (
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

const AuthProvider = ({children}) => {
  const [isUserLogin, setIsUserLogin] = useState(false)
  const login = ()=>{
    setIsUserLogin(true)
  }
  const logout = ()=>{
    setIsUserLogin(false)
  }

  return (
    <AuthContext.Provider value={{isUserLogin, login, logout}}>
       {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };