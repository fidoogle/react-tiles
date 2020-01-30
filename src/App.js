import React from 'react';
import Search from './components/search'
import Tiles from './components/tiles'
import Nav from './components/nav'
import PageTitles from './components/page-titles'

function App() {
  
  return (
    <>
      <Nav/>
      <PageTitles/>
      <Search/>
      <Tiles/>
    </>
  );
}

export default App;
