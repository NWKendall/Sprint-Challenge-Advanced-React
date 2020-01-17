import React from "react";
import { render } from "@testing-library/react";
import PlayerCard, { player } from "./PlayerCard";


test(``, () => {
  const { getByText } = render(<h4></h4>);
  
  getByText(/searches/i)
  

})