import React, { Component } from 'react';
import './Nim.css';
import Buttonsclick from "./Buttonsclick";

class Barsholder extends React.Component {
  render () {
    var barsView = "";
    for (let i=0; i < this.props.count;i++) {
      barsView+="*"
    }
  return(
    <div>
    {barsView}
    <br/>
    </div>
  );
}
}

class Scoreboard extends React.Component {
  render () {
    return(
      <div>
      <h3>Палочек осталось: {this.props.count}</h3>
      <p>Ходит игрок: {this.props.player}</p>
      </div>
    );
  }
}

class Bigalert extends React.Component {
  render () {
    return (
      <h1> Игрок {this.props.player} победил !</h1>
    );
  }
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
      if (this.state.barsCount < 0) {
          return <Bigalert  player = {this.state.currentPlayer}/>;
      } else {
      return (
        <div>
        <Scoreboard count = {this.state.barsCount} player = {this.state.currentPlayer}/>
        <Barsholder count = {this.state.barsCount} />
        <Buttonsclick  forplayer = "1" clickMethod = {this.removeBars} player = {this.state.currentPlayer}/>
        <Buttonsclick  forplayer = "2" clickMethod = {this.removeBars} player = {this.state.currentPlayer}/>
        </div>
      );
    }
    }
}

export default Nim;
