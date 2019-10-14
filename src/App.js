import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <header className="App-header">
            <ul>
              <li><h2>Home</h2> </li>
              <li><h2>About Us</h2></li>
              <li><h2>Recipes</h2> </li>
            </ul>
        </header>
        <main>
          <div className="search-form">
          <form >
            <input type="text" className="search-field"/>
            <input type="submit" value="search" className="search-button"/>
          </form>
          </div>
         
        </main>
      </div>
      
    </div>
  );
}

export default App;
