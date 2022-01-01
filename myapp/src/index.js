import React from 'react';
import ReactDOM from 'react-dom';
import FormRenderingInFunctions from './components/FormRenderingInFunctions';
// import Home from './components/Home';
// import FormRendering from './components/FormRendering';
  import './index.css';
//  import App from './App';
import reportWebVitals from './reportWebVitals';
// import ListRendering from './components/ListRendering';
// import Functional from './components/Functional';
// import ClassComponent from './components/ClassComponents';
// import UnionBank from './components/UnionBank';
// import StateinClassComponent from './components/StateinClassComponent';
// import StateinFunctionalComponent from './components/StateinFunctionalComponent';

ReactDOM.render(
  <React.StrictMode>
      {/* <App /> */}
    {/* <Functional/>    */}
         {/* <UnionBank />  */}
    {/* <StateinClassComponent/>  */}
   {/* <stateinFunctionalComponent/> */}
   {/* <FormRendering/> */}
   <FormRenderingInFunctions/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
