import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./shared/Navbar.jsx";
import { Home } from "./Pages/Home.jsx";
import About from "./Pages/About.jsx"
import AxiosPractice from "./Components/AxiosPractice.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    {/* <Home /> */}
    {/* <About/> */}
    <AxiosPractice/>
  </StrictMode>,
);
