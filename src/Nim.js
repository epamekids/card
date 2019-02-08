import React, { Component } from 'react';
import './Nim.css';
import Buttonsclick from "./Buttonsclick";

function Barsholder (props) {
  var barsView = "";
  for (let i=0; i < props.count;i++) {
    barsView+="*"
  }
  return(
    <div>
    {barsView}
    <br/>
    </div>
  );
}

function Scoreboard (props) {
    return(
      <div>
      <h3>Палочек осталось: {props.count}</h3>
      <p>Ходит игрок: {props.player}</p>
      </div>
    );
}


class Nim extends Component {

  constructor (props) {
      super(props)
      this.state = {
        barsCount : this.props.count,
        currentPlayer : 1,
      };
      this.removeBars = this.removeBars.bind(this);
  }


  removeBars (amount) {
    this.setState({
      barsCount: this.state.barsCount - amount,
      currentPlayer: 3 - this.state.currentPlayer,
    })
    }



    render () {

      return (
        <div>
        <Scoreboard count = {this.state.barsCount} player = {this.state.currentPlayer}/>
        <Barsholder count = {this.state.barsCount} />
        <Buttonsclick forplayer = "1" clickMethod = {this.removeBars} player = {this.state.currentPlayer}/>
        <Buttonsclick forplayer = "2" clickMethod = {this.removeBars} player = {this.state.currentPlayer}/>
        </div>
      )
    }
}

export default Nim;
