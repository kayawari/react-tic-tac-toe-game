import React from 'react'
import ReactDOM from 'react-dom';
import Game from './tic_tac_toe/index';
import App from './todo/App';
import BindingSample from './binding_sample/index'

ReactDOM.render(
  <BindingSample />,
  document.getElementById('root3')
)

ReactDOM.render(
  <App />,
  document.getElementById('root1')
);

ReactDOM.render(
  <Game />,
  document.getElementById('root2')
);