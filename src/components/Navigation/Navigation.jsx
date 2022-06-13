import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
const { navBar, navigation, navLink } = styles;

const Navigation = () => {
  const { themeChangeHandler } = useContext(ThemeContext);
  // console.log("theme",theme)

  // const themeChangeHandler = () => {
  //   setTheme(!theme);
  // };
  const useContextValue = useContext(AuthContext);

  return (
    <div className={navigation}>
      <nav className={navBar}>
        <ul>
          <li className={navLink}>
            <Link to="/"> Home </Link>
          </li>
          {!useContextValue.isUserLogin && (
            <li className={navLink}>
              <Link to="/login">
                Login
              </Link>
            </li>
          )}
          {/* <li className={navLink}>
            <Link to="/login">Login</Link>
          </li> */}
          <li className={navLink}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div>
        <label htmlFor="theme">Dark Theme</label>
        <input type="checkbox" name="theme" onChange={themeChangeHandler} />
      </div>
    </div>
  );
};

export default Navigation;
