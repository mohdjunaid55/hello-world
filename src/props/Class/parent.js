// import React, { Component } from "react";
// import Child from "./child"; // Ensure the path is correct

// parent to child 
// export default class Parent extends Component {
//     firstName = "junaid";

//     render() {
//         return (
//             <div>
//                 <h1> Parent Component Class </h1>
//                 <Child componentName="Child" firstName={this.firstName} />
//             </div>
//         );
//     }
// }



// child to parent-------------

import React, { Component } from "react";
import Child from './child'; // Ensure the path is correct

export default class Parent extends Component {
    firstName = "junaid";

    childToParent = (value) => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <h1> Parent Component Class </h1>
                <Child
                    componentName="Child"
                    firstName={this.firstName}
                    childToParent={this.childToParent}
                />
            </div>
        );
    }
}
