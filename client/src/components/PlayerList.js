import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = ({players}) => {
  return (
    <div style={{display: "grid", 
      flexWrap: "wrap", 
      gridGap: "1%",  
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      padding: "2%",
      overflow: "auto"}}>      
      {players.map(player => (
        <PlayerCard player={player} key={player.id}/>
      ))}      
    </div>
  )
}

export default PlayerList