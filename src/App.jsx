import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);


  return (
    <div className="app-container">
      {!showProductList && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
             
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {showProductList && (
        <div className="product-list-container">
         
        </div>
      )}
    </div>
  );
}

export default App;
