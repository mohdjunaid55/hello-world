import React, { Component } from 'react';

// Mounting ----------------

export default class App extends Component {
  // 1. Constructor is called first
  constructor() {
    super();
    console.log("Constructor called");
    
    // 2. Initialize state
    this.state = {
      counter: 1000
    };
  }

  Increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  Decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  // 4. componentDidMount is called after the component is mounted
//   whwn properly compoent loaded in ui // willUnmount phases
  componentDidMount() {
    console.log("componentDidMount called");
    // this.setState({counter: 30}) // change kr skte h 
  }

  // 3. Render method is called to render the component
  render() {
    console.log("Render method called");
    return (
      <div>
        <p>Life-cycle of component</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}


// updating-------------------
// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();
//     // 2. Initialize state
//     this.state = {
//       counter: 1000
//     };
//   }

//   Increment = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });

//     this.forceUpdate()
//   }

// // 3 
//   shouldComponentUpdate(nextProps, nextState){
//     console.log(" shouldComponentUpdate");
//       console.log(nextProps);
//       console.log(nextState);

//     //   return false
//     return true
//   }


//   Decrement = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   }


//   // 4.
//   render() {
//     console.log("Render method called");
//     return (
//       <div>
//         <p>Life-cycle of component</p>
//         <p>Counter: {this.state.counter}</p>
//         <button onClick={this.Increment}>Increment</button>
//         <button onClick={this.Decrement}>Decrement</button>
//       </div>
//     );
//   }

// //   5
//   getSnapshotBeforeUpdate(preProps, prevState){
//     console.log("getSnapshotBeforeUpdate");
//    console.log(preProps);
//    console.log({prevState});
   
//    return {
//     preProps,
//     prevState,
//    }
//   }

// // 6
//   componentDidUpdate(preProps, prevState){
//     console.log("componentDidUpdate");
//     console.log(preProps);
//     console.log(prevState);
//   }


// }
