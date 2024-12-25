import React, { useState, useEffect } from "react";
import Love from "./Love.png";
import Sad from "./sad.png";
import Like from "./like.png";
import Happy from "./happy.png"
function ShowPic(props) {
  console.log("pic is ", props.pic);
  const [text, setText] = useState("");
  const [pic, setPic] = useState(null);

  const picHandle = (event) =>{const input = event.target.value;
    setText(input); 

  //useEffect hook updates pic state
    //essentially it tells which pic is interacted with!
    console.log("function called", props.pic);
    if (input === "Love") {setPic(Love)}
    else if (input === "Like") {setPic(Like)}
    else if (input === "Sad") {setPic(Sad)}
    else if (input === "Happy") {setPic(Happy)}
    else {setPic(null)}};

  return(
    <div>
        <h1>Show Pic!</h1>
        <input type="text"
        value={text}
        onChange={picHandle}/>
    <div><img src={pic}/></div>
    </div>
  );}
export default ShowPic;