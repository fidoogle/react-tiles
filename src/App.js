import React from 'react'
import Nav from './components/nav'
import PageTitles from './components/page-titles'
import Search from './components/search'
import PayButtons from './components/pay-buttons'
import Tiles from './components/tiles'
import Footer from './components/footer'

function App() {
  
  return (
    <>
      <Nav/>
      <PageTitles/>
      <Search/>
      <PayButtons/>
      <Tiles/>
      <Footer/>
    </>
  );
}

export default App;
