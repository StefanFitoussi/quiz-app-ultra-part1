import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function ActiveToggle() {
  const [isActive, setActive] = useState(false);
  if (!isActive) {
    return (
      <main>
        <div className="box" />
        <button type="button" onClick={() => setActive(true)}>
          Show Answer
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <div className="box box--active" />
        <button type="button" onClick={() => setActive(false)}>
          Hide Answer
        </button>
      </main>
    );
  }
}
