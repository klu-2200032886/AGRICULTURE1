
import React, { useState } from 'react';
import fertilizerImage1 from './fertilizer1.jpg';
import fertilizerImage2 from './fertilizer2.jpg';
import fertilizerImage3 from './fertilizer3.jpg';
import fertilizerImage4 from './fertilizer4.jpg';
import fertilizerImage5 from './fertilizer5.jpg';
import fertilizerImage6 from './fertilizer6.jpg';
import fertilizerImage7 from './fertilizer7.jpg';
import fertilizerImage8 from './fertilizer8.jpeg';
import fertilizerImage9 from './fertilizer9.jpeg';
const Fertilizers = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  
  const [totalAmount, setTotalAmount] = useState(0);

  const purchaseItem = (fertilizer) => {
    setPurchasedItems([...purchasedItems, fertilizer]);
    setTotalAmount(totalAmount + fertilizer.price);
  };

  const fertilizersData = [
    {
      id: 1,
      name: "Solomon",
      
      image: fertilizerImage1,
      price: 10 
    },
    {
      id: 2,
      name: "Vermi Compost",

      image: fertilizerImage2,
      price: 25 
    },
    {
        id: 3,
        name: "Opera",
        
        image: fertilizerImage3,
        price: 25 
      },
      {
        id: 4,
        name: "Bone Meal",
        
        image: fertilizerImage4,
        price: 25 
      },
      {
        id: 5,
        name: "Vamgro",
        
        image: fertilizerImage5,
        price: 55
      },
      {
        id: 6,
        name: "Agro",
        
        image: fertilizerImage6,
        price: 15 
      },
      {
        id: 7,
        name: "Volstar",
        
        image: fertilizerImage7,
        price: 25 
      },
      {
        id: 8,
        name: "Milorganite",
        
        image: fertilizerImage8,
        price: 25 
      },
      {
        id: 9,
        name: "Biopower",
        
        image: fertilizerImage9,
        price: 25 
      }

    
  ];

  return (
    <div>
     
      <div className="fertilizer-list">
        {fertilizersData.map(fertilizer => (
          <div key={fertilizer.id} className="fertilizer-item">
            <div className="fertilizer-images">
              <img src={fertilizer.image} alt={fertilizer.name} className="fertilizer-image" />
            </div>
            <div className="fertilizer-details">
              <h3>{fertilizer.name}</h3>
              <p>{fertilizer.description}</p>
              <p>Price: Rs{fertilizer.price}</p>
              <button onClick={() => purchaseItem(fertilizer)}>Purchase </button> <button> quantity</button> 
            </div>
          </div>
        ))}
      </div>
      <h3>Purchased Items:</h3>
      <ul>
        {purchasedItems.map(item => (
          <li key={item.id}>{item.name} - Rs{item.price}</li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Fertilizers;
