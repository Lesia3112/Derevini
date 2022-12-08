import RoutesNavigation from 'components/RoutesNavigation';
import React from 'react';
 // import './styles/_index.scss';
import Header from "./components/header/Header";
// import Content from 'components/content/content';
import Footer from 'components/footer/Footer';
 
   
const  App = () => {
  return (
  < div>
    <Header/>
    <RoutesNavigation/>
    <Footer/>

  </div>
  )
};

export default App;

