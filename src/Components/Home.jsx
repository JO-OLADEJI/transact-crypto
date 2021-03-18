import React, { useState } from 'react';
import './Home.css';
import CryptoTile from './CryptoTile.jsx';
import Purchase from './Purchase.jsx';
import Transactions from './Transactions.jsx';

function Home() {
  // -> state
  const [coinData, setCoinData] = useState([
    { id: 1, name: 'BTC', value: 57989.80, icon: <i className="fab fa-bitcoin"></i>, selected: true },
    { id: 2, name: 'ETH', value: 1836.42, icon: <i className="fab fa-ethereum"></i>, selected: false },
    { id: 3, name: 'GGX', value: 0.058, icon: <i className="fab fa-gg-circle"></i>, selected: false }
  ]);
  const [coin, setCoin] = useState(coinData[0]);
  // const [reciept, setReciept] = useState([]);



  // -> functions
  const handleSelect = (id) => {
    let tempState = [];
    coinData.forEach((data) => tempState.push(data));
    tempState.map((data) => {
      if (data.id === id) {
        data.selected = true;
      } else {
        data.selected = false;
      }
    });
    setCoinData(tempState);
    const coinIndex = tempState.findIndex(data => data.selected === true);
    setCoin(coinData[coinIndex]);
  }

  const handlePurchase = (e) => {
    e.preventDefault();
  }



  return (
    <div className="Home">
      <section className="functional-area">

        <h1>Transact</h1>
        <div className="tiles">
          { coinData.map((data) => 
            <CryptoTile
              key={ data.id }
              id={ data.id }
              coin={ data.name }
              value={ data.value }
              icon={ data.icon }
              selected={ data.selected }
              handleSelect={ handleSelect }
            />
          ) }
        </div>
        <div className="purchase-area">
          <Purchase
            coin={ coin }
            handlePurchase={ handlePurchase }
          />
        </div>
        <div className="records">
          <h1>Purchases</h1>
          <Transactions />
        </div>

      </section>
    </div>
  );
}

export default Home;