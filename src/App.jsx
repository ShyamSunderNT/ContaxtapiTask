import React from 'react';
import { CartProvider } from './Componants/CartContext';
import Card from './Componants/Card';

const App = () => {
  return (
    <CartProvider>
      <div className="container-fluid bg-light">
        <h1  className='fs-2 p-3 text-success'>Cart Page</h1>
        <Card />

      </div>
    </CartProvider>
  );
};

export default App;