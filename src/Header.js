import React from 'react';
import MenuItem from "./MenuItem";

function Header(props) {
  return (
    <div className="header">
      {props.menuItem.map(el => <MenuItem key={el} item={el}/>)}
    </div>
  );
}

export default Header;
