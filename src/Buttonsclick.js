import React, { Component } from 'react';
import "./Buttons.css";


class Buttonsclick extends React.Component {


    render () {
    if (this.props.forplayer != this.props.player) {
      return null;
    } else {
    return (
      <div>
      <br />
      <button  onClick = {() => {this.props.clickMethod(1)}}>1</button>
      <button  onClick = {() => {this.props.clickMethod(2)}}>2</button>
      <button  onClick = {() => {this.props.clickMethod(3)}}>3</button>
      </div>
    );
    }
  }

}

export default Buttonsclick;
