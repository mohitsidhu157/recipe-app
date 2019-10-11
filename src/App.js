import React from 'react';

import './App.css';
const  firebase = require('firebase');
function App () {
    const APP_ID = '8dd921db';
    const APP_KEY = '17c31add41ba209f2afe8e957b511fc9';
    const exampleReq = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
      return (
      <div className="App">
      Hello world
      </div>
    );
 
}

export default App;
