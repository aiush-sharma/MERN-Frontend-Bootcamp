import "./App.css";
import Home from "./Pages/Home";
import { About } from "./Pages/About";
import Navbar from "./Shared/Navbar";
import AxiosPractice from "./components/Axios";
import { Routes, Route } from "react-router-dom";
import UseEffect from "./components/UseEffect";
import PostData from "./components/PostData";
import UpdateData from "./components/UpdateData";
import Optimization from "./Pages/Optimization";
import UseRef from "./UI/UseRef";
import Memo from "./UI/Memo";
import UseContext from "./Pages/UseContext";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/axios" element={<AxiosPractice />} />
        <Route path="/useeffect" element={<UseEffect></UseEffect>} />
        <Route path="/post" element={<PostData />} />
        <Route path="/editdata" element={<UpdateData />} />
        <Route path="/optimization" element={<Optimization />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/memo" element={<Memo />} />
        <Route
          path="*"
          element={
            <h1 className=" text-9xl font-extrabold text-red-500 m-10  ">
              404 Not Found
            </h1>
          }
        />
        <Route path="usecontext" element={<UseContext />}></Route>
      </Routes>
    </>
  );
}

export default App;
