
import React, { useState } from 'react';
import scannerImage from './scanner.jpg'; 

const Payments = ({ totalAmount, purchasedItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = () => {
    
    console.log(`Payment Method: ${paymentMethod}`);
    console.log(`Total Amount: ${totalAmount}`);
    console.log('Purchased Items:', purchasedItems);

    setPaymentStatus('Payment successful!');
  };

  return (
    <div>
      <h2>Payment</h2>
      <div>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="creditCard" 
            checked={paymentMethod === 'creditCard'} 
            onChange={() => setPaymentMethod('creditCard')} 
          />
          Credit Card
        </label>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="upi" 
            checked={paymentMethod === 'upi'} 
            onChange={() => setPaymentMethod('upi')} 
          />
          UPI
        </label>
        <label>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="scanner" 
            checked={paymentMethod === 'scanner'} 
            onChange={() => setPaymentMethod('scanner')} 
          />
          QR Code Scanner
          <img src={scannerImage} alt="Scanner" style={{ width: '20px', marginLeft: '5px' }} />
        </label>
        {/* Add more payment methods as needed */}
      </div>
      <button onClick={handlePayment}>Proceed to Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Payments;


