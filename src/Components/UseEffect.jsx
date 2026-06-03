import { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [randomOne, setRandomOne] = useState(0);
  const [randomTwo, setRandomTwo] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      setData(data.products);
    } catch (err) {
      console.log("Error Occured", err);
    }
  }

  function randomValue() {
    const randomNum = Math.floor(Math.random() * 9999);
    setRandomOne(randomNum);
  }

  function randomValue2nd() {
    const randomNum = Math.floor(Math.random() * 9999);
    setRandomTwo(randomNum);
  }
  useEffect(() => {
    console.warn("Random One Value Changed", randomOne);
  }, [randomOne]);
  useEffect(() => {
    console.warn("Random Two Value Changed", randomTwo);
  }, [randomTwo]);

  useEffect(() => {
    console.warn("UseEffect fetch Component Mounted");
    fetchData();
  }, []);

  return (
    <>
      <h1>UseEffect</h1>
      <p> Bj11-coded </p>

      <h1 className="text-4xl font-extrabold ">Random value</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={randomValue}
      >
        Generate One Random Value
      </button>

      <button
        className="bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
        onClick={randomValue2nd}
      >
        Generate Another Random Value
      </button>

      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default UseEffect;
