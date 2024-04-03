import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import { useGlobalContext } from "../context";
import { CustomButton, CustomInput, GameLoad, PageHoc } from "../components";

const CreateBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext();
  const [waitBattle, setWaitBattle] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!battleName || !battleName.trim()) return null;

    try {
      await contract.createBattle(battleName);
      setWaitBattle(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {waitBattle && <GameLoad />}
      <div className="flex flex-col mb-3">
        <CustomInput
          lable="Battle"
          placeholder="Enter battle name"
          value={battleName}
          handleValueChange={setBattleName}
        />
        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restStyle="mt-6"
        />
      </div>
      <p className={styles.infoText} onClick={() => navigate("/join-battle")}>
        {" "}
        Or join already existing battles
      </p>
    </>
  );
};

export default PageHoc(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for others to join you</>
);
