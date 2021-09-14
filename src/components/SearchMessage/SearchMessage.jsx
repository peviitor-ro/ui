import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

import styles from "components/SearchMessage/SearchMessage.module.scss";

const SearchMessage = ({ message, icon }) => {
  const { messageContainer, messageContainer_message } = styles;

  return (
    <div className={messageContainer}>
      {icon}
      <p className={messageContainer_message}>{message}</p>
    </div>
  );
};

export default SearchMessage;
