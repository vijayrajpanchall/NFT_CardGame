import React from "react";
import { PageHoc } from "../components";
import styles from "../styles";
import { useNavigate } from "react-router-dom";

const JoinBattle = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={styles.joinHeadText}>Available Battles: </h2>
      <p className={styles.infoText} onClick={() => navigate("/create-battle")}>
        Or create a new battle
      </p>
    </>
  );
};

export default PageHoc(
  JoinBattle,
  <>
    Join <br /> a Battle
  </>,
  <>Join already existing battles</>
);
