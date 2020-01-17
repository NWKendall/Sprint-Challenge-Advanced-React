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
      <h2>Women's World Cup: Most Popular Players!</h2>
      <button data-testid="NBbtn" onClick={toggleTheme}>DarkMode</button>
    </div>
  )
}

export default NavBar