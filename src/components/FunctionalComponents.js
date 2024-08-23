// normal function-----------------
//  export function FunctionalComponents (){
//     return <h1> normal functional Componens</h1>
// }

// ---------------------- use default 

// export default function FunctionalComponents (){
//     return 
{/* <h1> normal functionalComponens</h1> */}
// }


// flat arrow function-------------------
import React from 'react';

const FunctionalComponents = () => {
    // If we want to return multiple child elements, we need to wrap them in a parent element
    return (
        <div>
            <h1>Arrow Functional Component</h1>
            <h1>Arrow Functional Component</h1>
            <h1>Arrow Functional Component</h1>
            <h1>Arrow Functional Component</h1>
        </div>
    );
};

export default FunctionalComponents;

