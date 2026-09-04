import React from "react";

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
