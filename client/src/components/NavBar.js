import React from "react";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {

  const [darkMode, setDarkMode] = useTheme();

  const toggleTheme = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  return (
    <div style={{display: "flex", padding: "2%", justifyContent: "space-between", alignItems: "center" }} style={darkMode ? {backgroundColor: "#313843"} : {backgroundColor: "skyblue"}}>
      <img src="https://api.fifa.com/api/v1/picture/tournaments-sq-4/278513_w" />
      <h2>Women's World Cup: Most Popular Players!</h2>
      <button data-testid="NBbtn" onClick={toggleTheme}>DarkMode</button>
    </div>
  )
}

export default NavBar