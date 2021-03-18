import React from 'react';
import './CryptoTile.css';

const CryptoTile = (props) => {
  // -> state
  const selectedStyle = {
    border: '3px dashed #2196F3',
  }


  return (
    <div className="CryptoTile" style={ props.selected ? selectedStyle : null } onClick={ () => props.handleSelect(props.id) }>
      <h3>{ props.coin }</h3>
      <div>{ props.icon }</div>
      <h3>${ (props.value).toLocaleString() }</h3>
    </div>
  );
}
 
export default CryptoTile;