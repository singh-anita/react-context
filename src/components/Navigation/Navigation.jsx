import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { ThemeContext } from "../../context/ThemeContext";
const { navBar, navigation, navLink } = styles;


const Navigation = () => {
const { theme, setTheme } =  useContext(ThemeContext)
// const themeContextValue = useContext(ThemeContext)
// console.log('themeContextValue', themeContextValue.dark)
// const darkMode = themeContextValue.dark;
const themeChangeHandler =() =>{
  setTheme(!theme)
}
  return (
    <div className={navigation}>
      <nav className={navBar}>
        <ul  className={theme === true ? "light" : "dark"}>
          <li className={navLink}>
            <Link to="/"> Home </Link>
          </li>
          <li className={navLink}>
            <Link to="/login">Login</Link>
          </li>
          <li className={navLink}>
            <Link to="">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div>
        <label htmlFor="theme">Dark Theme</label>
        <input type="checkbox" name="theme" onChange={themeChangeHandler} />
        {console.log(theme)}
      </div>
    </div>
  );
};

export default Navigation;