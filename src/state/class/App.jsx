import React, { Component } from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state ={
            counter: 1000
        }
    }


increment = () => {
// 1 step------------
    this.setState({
        counter: this.state.counter + 1
    })

// 2 step yhs pr ++ work nhi krta ---------
// this.setState({
//     counter: this.state.counter++
// })

//  3 step----------
// this.setState({
//     counter: ++this.state.counter + 1
// })

// 4--------------
// this.setState((preState) => {
//     return {counter: preState.counter + 1}
// })

}

decrement = () => {
    this.setState({
        counter: this.state.counter - 1
    })
}

  render() {
    return (
      <div>
        {/* {console.log(this.state)}  */}
      <p>Counter:{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
