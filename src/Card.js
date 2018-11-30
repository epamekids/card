import React, { Component } from 'react';
import './Card.css';
import logo from './logo.jpg';


class Card extends Component {
    render () {
      return (
        <div>
        {this.props.image}
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue_grey-amber.min.css" />
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <img src={logo} alt={"logo"}/>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text"></h2>
          </div>
          <div class="mdl-card__supporting-text">
              <h4>{this.props.card__title}</h4>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">

            </button>
          </div>
        </div>
        </div>
      )
    }
}

export default Card;
