import React from 'react';
import WeatherLocation from "./components/WeatherLocation";

import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherLocation city ="Mérida,Mx"></WeatherLocation>
    </div>
  );
}

export default App;
