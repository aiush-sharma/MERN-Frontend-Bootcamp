import React, { useState } from "react";
import Card from "../UI/Card";
import ThemeContext from "../hooks/themeContext";
const useContext = () => {
  const [data, setData] = useState(0);
  const randomValue = () => {
    setData(Math.floor(Math.random() * 999));
  };

  return (
    <div>
      <h1>Main UseContext component</h1>
      <button onClick={randomValue} className="p-5 bg-red-200 rounded-2xl">
        From UseContext {data}
      </button>
      <ThemeContext.Provider value={data}>
        <Card></Card>
      </ThemeContext.Provider>
    </div>
  );
};

export default useContext;
