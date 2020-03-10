import React from 'react';
import './App.css';
import Routes from './Routes';
import CartSummary from "./CartSummary";

function App() {
  return (
    <div className="App">
      <Routes />
      <CartSummary />
    </div>
  );
}

export default App;
