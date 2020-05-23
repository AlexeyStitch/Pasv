import React from 'react';
import MenuItem from "./MenuItem";


function Header(props) {
  return (
    <div className="header">
        {props.menu.map(el => <button onClick={() => props.onClicked(el)} key={el}>{el}</button> )}
        <ul>
            <button onClick={() => props.leska('Akula')}>Улов</button>
        </ul>
        <input type="text" onChange={(e) => props.leska(e.target.value)}/>
      {props.menuItem.map(el => <MenuItem key={el} item={el}/>)}
    </div>
  );
}

export default Header;
