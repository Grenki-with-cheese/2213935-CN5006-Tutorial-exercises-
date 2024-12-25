import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//task1
import EmojiCounter from "./EmojiCounter";
//task2
import ToggleModeComponent from "./ToggleModeComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <EmojiCounter type="nishkii"></EmojiCounter>
      <EmojiCounter type="pika"></EmojiCounter>
      <EmojiCounter type="john"></EmojiCounter>
      <ToggleModeComponent/>
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
