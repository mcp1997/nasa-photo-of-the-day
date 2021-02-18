import React from "react";
import "./App.css";
import Button from './Button'

function App() {
  
  return (
    <div className="App">
      <h1>Matt Phillips Presents:</h1>
      <div className='nasaLogo'>
        <img 
          src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' 
          alt='NASA Logo'
          style={{width:500}}
        />
      </div>
      <h2>Photo of the Day</h2>
      <Button />
    </div>
  );
}

export default App;
