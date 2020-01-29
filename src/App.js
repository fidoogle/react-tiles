import React from 'react';
import './App.scss';
import Search from './components/search'
import Tiles from './components/tiles'


function App() {
  
  return (
    <div className="App">
      <p>SCP</p>
      <Search/>
      <Tiles/>
    </div>
  );
}

export default App;
