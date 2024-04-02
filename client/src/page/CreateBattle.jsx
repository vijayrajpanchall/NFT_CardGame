import React from "react";
import { PageHoc } from "../components";

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello from CreateBattle</h1>
    </div>
  );
};

export default PageHoc(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for others to join you</>
);
