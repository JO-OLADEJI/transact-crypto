import React, { useEffect, useState } from 'react';
import './Purchase.css';

const Purchase = (props) => {
  // -> state 
  const [converted, setConverted] = useState(0);
  const [value, setValue] = useState(0);


  // -> functions
  const handleChange = (e) => {
    const rawInput = Number(e.target.value);
    const val = rawInput / props.coin.value;
    setValue(rawInput);
    setConverted(val.toFixed(3));
  }

  useEffect(() => {
    const newVal = value / props.coin.value;
    setConverted(newVal.toFixed(3));
  }, [props.coin])


  return (
    <div className="Purchase">
      <form action="">
        <div className="space">
          <div>
            <i className="fas fa-dollar-sign"></i>
            <input onChange={ (e) => handleChange(e) } placeholder="amount" type="number" min="0"/>
          </div>
          <i className="fas fa-exchange-alt"></i>
          <div id="conversion">
            <div className="flex">
              { props.coin.icon }
              <h3>{ converted }</h3>
            </div>
            <h3>{ props.coin.name }</h3>
          </div>
        </div>
        <button onClick={ (e) => props.handlePurchase(e) }>Purchase</button>
      </form>
    </div>
  );
}
 
export default Purchase;