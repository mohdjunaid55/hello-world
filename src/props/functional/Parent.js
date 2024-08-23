// import Child from "./Child";

// // Parent to child 
// export default function Parent(){
//     let firstname = "junaid";
//     return (
//         <div>
//             <h1> Parent Component </h1>
//             <Child componentName = "child" 
//             firstname = {firstname}/>

//         </div>
//     )
// }

// child to Parent--------------

// import Child from "./Child";

// export default function Parent(){

//   function childToParent(value){
//   console.log(value);
// }
//     return (
//         <div>
//             <h1> Parent Component </h1>
//            <Child childToParent = {childToParent}/>
//         </div>
//     )
// }



// children -----------------------------
// import Child from "./Child";
// import { Button } from "react";

// export default function Parent(){

//     return (
//         <div>
//             <h1> Parent Component </h1>
//             <Child>
//                 <Button/>
//             </Child>
//         </div>
//     )
// }