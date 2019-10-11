import React from 'react'
import ReactDOM from 'react-dom';
import Game from './tic_tac_toe/index';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root1')
);

ReactDOM.render(
  <Game />,
  document.getElementById('root2')
);