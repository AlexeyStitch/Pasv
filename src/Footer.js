import React from 'react';
import FooterMenu from "./FooterMenu";

function Footer(props) {
  return (
    <div className="footer">
      {props.footerItem.map(el => <FooterMenu key={el} massive={el}/>)}
    </div>
  );
}

export default Footer;
