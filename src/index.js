import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import App from './App';

// --componets----
// import  { FunctionalComponents}  from './components/FunctionalComponents';

// arrow function
// import   FunctionalComponents  from './components/FunctionalComponents';

// default use kr ke hm ese { } hta dege
// import  FunctionalComponents  from './components/FunctionalComponents';

// ----------------
// import ClassComponent from './components/ClassComponents';

// props------function
// import Parent from './props/functional/Parent';
// import Child from './props/functional/Child';




//  class-----------props
// import Parent from "./props/Class/parent"; // Ensure the path is correct
// import Child from './props/Class/child';

// child to parent 
// import Parent from './props/Class/parent';


// jsx---
// import App from './jsx/app';

// state -function
// import App1 from './state/function/App1';

// state -class
// Import the component you want to render
// import App from "./state/class/App";

// life-cycle
// import App from './life-cycle/class/App';

// import App from './life-cycle/function/App';

// fregment-------
// import App from './fragments/App';

// portals-----
// import App from './portals/App';

// ref
// import App from './ref/class/App';

// sideeffect
// import App from './sideeffects/App';

// useReducer
import App from './useReducer/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    {/* <FunctionalComponents></FunctionalComponents > */}
    {/* <FunctionalComponents/> */} 

    {/* <ClassComponent></ClassComponent> */}
    
 {/* ------- */}
    {/* <App/> */}


{/* -------------------- */}
{/* <Parent></Parent> */}
{/* <Child></Child> */}


{/* <App></App> */}

 {/* Class props*-------/ */}
 {/* <Parent></Parent>  */}
 {/* <Child></Child>  */}


{/* props class ----*/}
{/* <Parent/> */}

{/* <App></App> */}


{/* /* // state -function----  */}
 {/* <App1></App1>   */}

{/* // state -class--*/  }
{/* <App/> */}

{/* life-cycle */}
{/* <App></App> */}

{/* fregment */}
{/* <App></App> */}

{/* portals */}
{/* <App></App> */}

{/* ref */}
{/* <App></App> */}

{/* sideeffect */}
<App></App>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
