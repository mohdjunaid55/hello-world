import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super();

        this.paragraphRef = React.createRef()
    }


    getDetails = ()=>  {
  this.paragraphRef.current.classList.toggle("container")
    }

  render() {
    return (
      <div>
        <p ref={this.paragraphRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas in maiores accusantium rem alias expedita repellendus quaerat, animi similique aspernatur,
             corporis reprehenderit quasi atque ex! Ab perferendis veniam minima.</p>
             <button onClick={this.getDetails}>Click me </button>
      </div>

    )
  }
}
