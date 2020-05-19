import React from 'react';


function MenuItem(props) {
  return (
    <div className="item">
      <div className="itemMassive">
        <ul>
          <li>{props.item}</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuItem;
