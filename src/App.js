import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collections from './src/Collections';
import FlashCardApi from './src/api-interface'


function App() {
  var data = FlashCardApi.ApiGetCollection();
    return(
      <div className="app">
        <header className="App-header">

        </header>
        <body className="App-body">
          <Collections collections={data}/>
        </body>
      </div>
    )


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <p className="App-logo" >text text text</p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //     </header>
  //   </div>
  // );
}

export default App;
