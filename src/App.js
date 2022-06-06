import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import PropsTest from './components/PropsTest';
import MapIt from './components/MapIt';
import ManageState from './components/ManageState'
import Fetch from './components/Fetch'
import { props } from 'bluebird';

// class App extends React.Component{
//   render(){
//     console.log('here is the app');
//     return(
//       <div className="app">
//       <header className="app_header">
//           <h1>Hello World</h1>
//         </header>
//       </div>
//     )
//   }
// }

// export default App;

function Another(props){
  return(
    <h3>Came from a function, now I'm here: {props.example}</h3>
  )
}
Another.propTypes = {
  example: PropTypes.string.isRequired,
}

function valid(){
  return false;
}

function ampersand(){
  return true;
}

export default class App extends React.Component{
  render(){
    const isValid = valid();
    const isAmpersand = ampersand();
    let string = 'this is a string 🤖'
    return(
      <div className="app">
      <header className="app_header">
          <h1>Hello World</h1>
          <Fetch />
          <Another example={'stringaling'}/>
          {isValid ? 
            <p>This is valid</p>
            :
            <p>This is not valid</p>
          }
          {isAmpersand &&
            <p>Ampersand is true and {string}</p>
          }
          
        </header>
        <ManageState />
        <React.Fragment>
          <p>react fragment test</p>
          <p>react fragment test 2</p>
        </React.Fragment>
        <PropsTest 
          string={string} 
          name='your name'
          header={<h2>HTML as a prop 🤘</h2>}
          functionPass={() => alert('passed via props')}
        />
        <MapIt />
       
      </div>
    )
  }
}

