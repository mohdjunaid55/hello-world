// Parent to child 
// export default function Child(props){
//     // console.log(props);
//     return (
//         <div>
//             <h1> Child Component </h1>
//             <h1>Component Name: {props.componentName} </h1>
//             <h1>firstname: {props.firstname}</h1>
//             {/* <h1>Radom: {Math.random()}</h1> */}
//         </div>
//     )
// }


// child to parent --------------------
// | child ka data share parent me


export default function Child(props){

    let firstname = "junaid";
    props.childToParent(firstname)

   function transferRandomNambar(value){
    props.childToParent(Math.random())

    console.log(value);
   } 

    return (
        <div>
            <h1> Child Component </h1>
            {/* automatically fire when componet loads */}
            {/* <button onClick={transferRandomNambar()}> Transfer Random Namber </button> */}

            {/* <button onClick={transferRandomNambar}> Transfer Random Namber </button> */}



 {/* automatically fire when componet loads */}
{/* <button onClick={transferRandomNambar("rana")}>Transfer Random Number</button> */}

<button onClick={() => transferRandomNambar("rana")}>Transfer Random Number</button>


        </div>
    )
}


//children  --------------------------

// export default function Child(props){
//     console.log(props);

//     return (
//         <div>
//             <h1> Child Component </h1>

//             {
//                 props.Children
//             }

//         </div>
//     )
// }