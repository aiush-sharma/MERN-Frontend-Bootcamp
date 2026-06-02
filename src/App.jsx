import React from "react";
import Navbar from "./shared/Navbar.jsx";
import { Home } from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AxiosPractice from "./Components/AxiosPractice.jsx";
import { Routes, Route } from "react-router-dom";
import UseEffect from "./Components/UseEffect.jsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/axios" element={<AxiosPractice />} />
        <Route
          path="*"
          element={
            <section className="flex  justify-center w-screen% h-screen">
              <h1 className="text-6xl   text-red-400 flex align-middle justify-center  m-10  ">
                404 not found oops!
              </h1>
            </section>
          }
        ></Route>
        <Route path="/useEffect" element={<UseEffect />}></Route>
      </Routes>
    </>
  );
}

export default App;
