import React, { Component, useEffect, useState } from "react";
import { useRef } from "react";
const UseRef = React.memo(({ values }) => {
  const [value, setValue] = useState(0);
  const inputRef = useRef(null);
  const valueRef = useRef(0);

  useEffect(() => {
    console.log("component mounted...");
    inputRef.current.focus();
  });

  console.log(valueRef);
  function Random() {
    setValue(Math.floor(Math.random() * 999));
  }
  function RandomRef() {
    valueRef.current = Math.floor(Math.random() * 999);
    console.log(valueRef.current);
  }
  useEffect(() => {
    console.log("Rendering use Ref...");
  });
  return (
    <>
      <div>
        UseRef Loaded
        <p>{value}</p>
        <button
          className="bg-pink-200 text-black px-10 py-3 border-none"
          onClick={Random}
        >
          Random Num
        </button>
        <p>{valueRef.current}</p>
        <button
          className="bg-red-400 text-black px-10 py-3 border-none"
          onClick={RandomRef}
        >
          Random Ref
        </button>
        <input type="text" ref={inputRef} />
      </div>
    </>
  );
});

export default UseRef;
