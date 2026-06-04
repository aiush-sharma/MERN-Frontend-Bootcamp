import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseRef from "../UI/UseRef";
import Memo from "../UI/Memo";
const Optimization = () => {
  const [random, setRandom] = useState(0);
  function randomNum() {
    setRandom(Math.floor(Math.random() * 999));
  }
  const [memo, setMemo] = useState(0);
  const [ref, setRef] = useState(0);

  const Navigate = useNavigate();
  const redirect = () => {
    Navigate("/UseRef");
  };
  const redirectMemo = () => {
    Navigate("/Memo");
  };
  console.log("This is optimization page");
  return (
    <>
      <p>{random}</p>
      <button
        onClick={randomNum}
        className="navigate-to-use-ref text-2xl bg-red-600 color:white"
      >
        Click Me
      </button>

      <p>this is optimization page</p>
      <button
        className="navigate-to-use-ref text-2xl bg-red-600 color:white"
        onClick={redirect}
      >
        Use Ref
      </button>
      <br />
      <br />
      <button
        className="navigate-to-use-ref text-2xl bg-red-600 color:white"
        onClick={redirectMemo}
      >
        Memo
      </button>

      <Memo values={memo}></Memo>
      <UseRef values={ref}></UseRef>
    </>
  );
};

export default Optimization;
