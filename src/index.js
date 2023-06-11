import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Session from "./component/session2";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <Session />
  </StrictMode>
);
