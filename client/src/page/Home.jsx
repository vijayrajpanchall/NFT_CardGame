import React, { useState } from "react";
import { CustomButton, CustomInput, PageHoc } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeholder="Enter your player name"
        handleValueChange={setPlayerName}
      />
      <CustomButton title="Register" handleClick={() => {}} restStyle="mt-6" />
    </div>
  );
};

export default PageHoc(
  Home,
  <>
    Welcome to Avax Gods <br /> a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle card
    Game
  </>
);
