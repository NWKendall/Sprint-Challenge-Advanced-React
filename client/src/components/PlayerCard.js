import React from "react";

const PlayerCard = ({player}) => {

  const { name, country, searches } = player
  

  return (
    <div style={{border: "black solid 1px", width: "30%"}}>
      <h4>{name}</h4>
      <h4>{country}</h4>
      <h4>Searches: {searches}</h4>   
    </div>
  )
}


export default PlayerCard;