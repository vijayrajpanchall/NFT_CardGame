import React from "react";

import styles from "../styles";

function CustomButton({ title, handleClick, restStyle }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${restStyle}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
