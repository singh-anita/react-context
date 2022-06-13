import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme ? styles.dark : ""} ${styles.mainWrapper}`}>
      {/* <header>
        <Navigation />                
      </header> */}
      <div>{children}</div>
    </main>
  );
};
