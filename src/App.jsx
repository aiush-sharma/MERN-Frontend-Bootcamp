import React from "react";
import Navbar from "./shared/Navbar";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import AxiosPractice from "./Components/AxiosPractice";
import { Routes, Route } from "react-router-dom";
import UseEffect from "./Components/UseEffect";
import PostData from "./Components/PostData";
import UpdateData from "./Components/UpdateData";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <PostData></PostData>
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
        <Route path="/updatedata" element={UpdateData}></Route>
      </Routes>
    </>
  );
}

export default App;
