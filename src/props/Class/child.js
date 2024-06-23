// import React, { Component } from "react";

// parent to child 
// export default class Child extends Component {
//     componentDidMount() {
//         console.log(this.props);
//     }

//     render() {
//         return (
//             <div>
//                 <h1> Child Component Class </h1>
//                 <h1>Component Name: {this.props.componentName}</h1>
//                 <h1>First Name: {this.props.firstName}</h1>
//             </div>
//         );
//     }
// }


// child to parent ----------
import React, { Component } from "react";

export default class Child extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    handleButtonClick = () => {
        this.props.childToParent("Hello from Child");
    };

    render() {
        return (
            <div>
                <h1> Child Component Class </h1>
                <h1>Component Name: {this.props.componentName}</h1>
                <h1>First Name: {this.props.firstName}</h1>
                <button onClick={this.handleButtonClick}>Send Data to Parent</button>
            </div>
        );
    }
}
