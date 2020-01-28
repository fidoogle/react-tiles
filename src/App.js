import React from 'react';
import './App.scss';
import Search from './components/search'
import Tiles from './components/tiles'


function App() {
  
  return (
    <div className="App">
      <Search/>
        <Tiles/>
    </div>
  );
}

export default App;
