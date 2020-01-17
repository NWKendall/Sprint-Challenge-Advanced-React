import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import NavBar from './components/NavBar';
import PlayerList from './components/PlayerList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test(`importing NavBar correctly`, () => {
//   render(<NavBar />);
// });
  
// test(`importing PlayerList correctly`, () => {
//   render(<PlayerList />);
// });
  




