// import React, { useState } from "react";

// function About() {
//   //   const generateNumber = () => {
//   //     let number = Math.floor(Math.random() * 9999);
//   //     let randomNum = document.getElementById("randomNum");
//   //     randomNum.innerHTML = number;
//   //   };
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>React Counter</h1>
//       <p id="showCount" key={count}>
//         {count}
//       </p>

//       <button
//         className="bg-green-300 text-black rounded-sm border-none font-bold py-2 px-6"
//         onClick={() => setCount(count + 1)}
//       >
//         Generate
//       </button>
//     </>
//   );
// }

// export default About;

import React from "react";

function About() {
  let count = 0;
  const updateCount = () => {
    if (count < 0 || count > 50) {
      document.getElementsByClassName("value")[0].innerText =
        "You reached Limit";
        
    }
    else{
    document.getElementsByClassName("value")[0].innerText = count;}
  };
  const increment = () => {
    count = count + 1;
    updateCount();
  };
  const decrement = () => {
    count = count - 1;
    updateCount();
  };
  return (
    <>
      <section className="flex h-screen justify-center items-center flex-col gap-4 ">
        <p className="value">000</p>
        <button
          className="bg-green-300 text-black rounded-sm border-none font-bold py-2 px-6"
          onClick={increment}
          onKeyUp={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-black rounded-sm border-none font-bold py-2 px-6"
          onClick={decrement}
          onKeyDown={decrement}
        >
          Decrement
        </button>
      </section>
    </>
  );
}

export default About;
