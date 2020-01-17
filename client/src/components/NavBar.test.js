import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe(`Navbar tests`, () => {
  test(`NavBar header contains "world cup"`, () => {
    const { getByText } = render(<NavBar />);

    getByText(/world cup/i)
  })


  test(`NavBar contains toggle buttong`, () => {
    const { getByTestId, getByText } = render(<NavBar />);
    
    getByText(/DarkMode/i)
    getByTestId(/NBbtn/)
  })
})