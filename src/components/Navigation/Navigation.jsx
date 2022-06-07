import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AuthContext } from "../../context/AuthContext";
const { navBar, navigation, navLink } = styles;

const Navigation = () => {
  // const { theme, setTheme } = useContext(AuthContext);
  // const themeChangeHandler = () => {
  //   setTheme(!theme);
  // };
  const useContextValue = useContext(AuthContext);

  return (
    <div className={navigation}>
      <nav className={navBar}>
        {/* <ul className={theme === true ? "light" : "dark"}> */}
        <ul>
          <li className={navLink}>
            <Link to="/"> Home </Link>
          </li>
          {!useContextValue.isUserLogin && (
          <li className={navLink}>
            <Link to="/login" className="btn btn-secondary">
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
        {/* <input type="checkbox" name="theme" onChange={themeChangeHandler} />
        {console.log(theme)} */}
      </div>
    </div>
  );
};

export default Navigation;
