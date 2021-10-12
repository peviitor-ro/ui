import React from "react";
import { useSelector } from "react-redux";

import useWindowDimensions from "utils/customsHooks/useWindowsDimensions";
import { footerLinks } from 'utils/constants/footerLinks';
import styles from "components/FooterMenu/footerMenu.module.scss";

const FooterMenu = () => {
  const { isBurger, switchBackground } = useSelector((state) => state);
  const { footerMenuContainer, menuTextOff, menuTextOn } = styles;
  const { width } = useWindowDimensions();
  const footerStyle = {
    display: isBurger || width > 768 ? "block" : "none",
  };

  

  return (
    <div className={footerMenuContainer} style={footerStyle}>
      <ul>
        {footerLinks.map(menuItem => 
          <li className={!switchBackground ? menuTextOff : menuTextOn} key={menuItem.title}>
            <a href={menuItem.path} target="_blank" rel="noreferrer">{menuItem.title}</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterMenu;
