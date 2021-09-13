import React from "react";
import { useEffect } from "react";

import styles from "./logo.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = ({ switchBackground }) => {
  const { logo, logoOff, logoContainer } = styles;
  console.log(switchBackground);
  return (
    <Link to="/" className={logoContainer}>
      <p
        className={
          switchBackground === undefined
            ? logo
            : switchBackground
            ? logoOff
            : logo
        }
      >
        pe viitor
      </p>
    </Link>
  );
};

export default Logo;
