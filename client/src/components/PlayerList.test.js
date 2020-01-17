import React from "react";
import ReactDOM from 'react-dom';

import { render } from "@testing-library/react";
import PlayerList, { players } from "./PlayerList";


test(`PlayerList component renders correctly`, () => {
  const component = render(<PlayerList />);
  console.log(component);
});

