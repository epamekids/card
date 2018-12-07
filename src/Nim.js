import React, { Component } from 'react';


class Nim extends Component {

  constructor (props) {
      super(props)

      this.state = {
        barsCount : this.props.count,
        currentPlayer : 1,
      }

  }

  removeBars (amount) {
    this.setState({
      barsCount: this.state.barsCount - amount,
      currentPlayer: 3 - this.state.currentPlayer,
    })
  }


    render () {

      var barsView = "";
      for (var i = 0; i < this.state.barsCount; i++) {
          barsView += "|";

      }
      //if (this.state.barsCount < 1) {
      //}

      return (
        <div>
          <div id="statistics">
            <p>Палочек на столе: {this.state.barsCount}</p>
            <p>Ходит игрок: {this.state.currentPlayer}</p>
          </div>
          <div id="bars">
              {barsView}
          </div>
          <div id="buttons">
            <button onClick={() => {this.removeBars(1)}}>1</button>
            <button onClick={() => {this.removeBars(2)}}>2</button>
            <button onClick={() => {this.removeBars(3)}}>3</button>
          </div>
        </div>
      )
    }
}

export default Nim;
