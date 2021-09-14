import React from "react";

import styles from "./logo.module.scss";
import { Link } from "react-router-dom";

const Logo = ({ switchBackground }) => {
  const { logo, logoOff, logoContainer } = styles;
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
