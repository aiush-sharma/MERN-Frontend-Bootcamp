import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import GamePage from "./GamePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <GamePage /> */}
    <App />
    {/* <Greeting /> */}
  </StrictMode>,
);
