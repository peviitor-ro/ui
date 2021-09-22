import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
import styles from "components/FooterMenu/footerMenu.module.scss";
import { useSelector } from "react-redux";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "utils/customsHooks/useWindowsDimensions";

const FooterMenu = () => {
  const { isBurger, switchBackground } = useSelector((state) => state);
  const { footerMenuContainer, menuTextOff, menuTextOn } = styles;
  const { height, width } = useWindowDimensions();
  const footerStyle = {
    display: isBurger || width > 768 ? "block" : "none",
  };

  return (
    <div className={footerMenuContainer} style={footerStyle}>
      {/* real links will be added later */}
      <ul>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://www.google.ro" target="_blank" rel="noreferrer">Despre noi</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://www.google.ro" target="_blank" rel="noreferrer">Ajutor</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://www.google.ro" target="_blank" rel="noreferrer">Feedback</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
