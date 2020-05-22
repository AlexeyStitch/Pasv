import React from 'react';
import MenuItem from "./MenuItem";

function Header(props) {
  return (
    <div className="header">
        <button onClick={() => {props.menu.map(el =>)}}></button>
        <button onClick={() => props.leska('Akula')}>Улов</button>
        <input type="text" onChange={(e) => props.leska(e.target.value)}/>
      {props.menuItem.map(el => <MenuItem key={el} item={el}/>)}
    </div>
  );
}
dasadassssssssssssssssssssssss

export default Header;
