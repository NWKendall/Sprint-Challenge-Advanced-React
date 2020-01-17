import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

test(`importing PlayerCard correctly`, () => {
  render(<PlayerCard />);
});