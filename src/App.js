import React from "react";
import "./styles.css";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

import {  Route, Routes } from 'react-router-dom';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render () {
    return (
     <div className="App">
    
       <Header />

       <div className="container">
         <main>
           
            <Routes>
               <Route exact path="/" element={<Rate />} />
               <Route exact path="/about" element={<About />} />
            </Routes>
           
            
          
         </main>
       </div>

       <div className="container" id="cookie_info">
         <div className="site-content">
           <div className="well">На нашем сайте мы используем cookie для сбора
           информации технического характера.<br />В
           частности, для персонифицированной работы сайта мы обрабатываем
           IP-адрес региона вашего 
           местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
         </div>
       </div>
  

       <Footer />
      </div>
    );
    }
}

export default App;