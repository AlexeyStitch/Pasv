import React from 'react';

function FooterMenu(props) {
  return (
    <div className="footerItem">
      <div className="massive">
        <ul>
          <li>{props.massive}</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
