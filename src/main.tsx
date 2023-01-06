import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <div>
        <h1 className="text-title bg-">hello world</h1>
        <input type="email" name="" id="input-login" />
        <input type="password" name="" id="input-login" />
      </div>
    </>
  </React.StrictMode>
);
