import React, { useState,useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useDispatch,useSelector } from 'react-redux';
function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false);
    const dispatch = useDispatch();
    const CartItems = useSelector((state) => state.cart.items);
    const [addedToCart, setAddedToCart] = useState({}); // State to control the visibility of the About Us page

    const plantsArray = [
        {
           
            ]
        }
    ];
   const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }


    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
            </div>
        </div>
        {!showCart? (
        <div className="product-grid">
    <div key={index}>
        <div className="product-list">
            <div className="product-card" key={plantIndex}>
               
                {/*Similarly like the above plant.name show other details like description and cost*/}
            </div>
            ))}
        </div>
    </div>
    ))}

        </div>
 ) :  (
)}
    </div>
    );
}

export default ProductList;
