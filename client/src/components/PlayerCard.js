import React from "react";

const PlayerCard = ({player}) => {

  const { name, country, searches } = player;
  
  return (
    <div style={{width: "1fr", border: "1px solid black"}}>
      <h4>{name}</h4>
      <h4>{country}</h4>
      <h4>Searches: {searches}</h4>   
    </div>
  )
};

export default PlayerCard;