import React from "react";

const Memo = ({ values }) => {
  console.log("Memo Component Rendered..");
  return (
    <div>
      <h1 className="text-red-500 text-4xl">Hi, this is memo</h1>
    </div>
  );
};

export default Memo;
