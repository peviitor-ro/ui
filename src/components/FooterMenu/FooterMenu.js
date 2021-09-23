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
      <ul>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://legal.peviitor.ro/termeni-si-conditii" target="_blank" rel="noreferrer">Termeni și Condiții</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://legal.peviitor.ro/confidentialitate" target="_blank" rel="noreferrer">Confidențialitate</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://legal.peviitor.ro/cookies" target="_blank" rel="noreferrer">Cookies</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://legal.peviitor.ro/gdpr" target="_blank" rel="noreferrer">GDPR</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://dev.peviitor.ro" target="_blank" rel="noreferrer">dev</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://api.peviitor.ro" target="_blank" rel="noreferrer">API</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://splash.peviitor.ro" target="_blank" rel="noreferrer">splash</a>
        </li>
        <li className={!switchBackground ? menuTextOff : menuTextOn}>
          <a href="https://peviitor.ro/humans.txt" target="_blank" rel="noreferrer">humans.txt</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
