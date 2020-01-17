import React from "react";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {

  const [darkMode, setDarkMode] = useTheme();

  const toggleTheme = e => {
    e.preventDefault();
    setDarkMode(!darkMode)

    console.log(`toggled dark mode!`)
  }


  return (
    <div>
      <h2>Women's World Cup</h2>
      <button onClick={toggleTheme}
      className={darkMode ? "defaultTheme" : "altTheme"}>DarkMode</button>
    </div>
  )
}

export default NavBar