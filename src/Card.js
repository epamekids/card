import React, { Component } from 'react';
import logo from './logo.jpg';
import './Card.css';


class Card extends Component {
    //constructor () {
    //  super()
    //}


    render () {
      return (
        <div>
        {this.props.image}
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <img src={logo} alt={"logo"}/>
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text"></h2>
          </div>
          <div className="mdl-card__supporting-text">
              <h4>{this.props.card__title}</h4>
          </div>
          <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">

            </button>
          </div>
        </div>
        </div>
      )
    }
}

export default Card;
