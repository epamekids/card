import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nim from './Nim';
//import App from './App';
//import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
  <Nim count="150"/>
</div>

/*<span>
  <Card card__title="Welcome"></Card>
  <Card card__title="Welcome"></Card>
</span>*/


  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
