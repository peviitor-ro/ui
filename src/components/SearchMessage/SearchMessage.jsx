import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

import styles from "components/SearchMessage/SearchMessage.module.scss";

const SearchMessage = ({ message }) => {
  const { messageContainer, messageContainer_message } = styles;

  return (
    <div className={messageContainer}>
      <FontAwesomeIcon icon={faFrown} size="6x" />
      <p className={messageContainer_message}>{message}</p>
    </div>
  );
};

export default SearchMessage;
