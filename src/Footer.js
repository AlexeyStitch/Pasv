import React from 'react';
import FooterMenu from "./FooterMenu";

function Footer(props) {
  return (
    <div className="footer">
      <button onClick={() => props.leska ('Beluga')}>Улов 2</button>
      {props.footerItem.map(el => <FooterMenu key={el} massive={el}/>)}
    </div>
  );
}

export default Footer;
