import React, { useState, useEffect } from "react";
import Love from "./Love.png";
import Sad from "./sad.png";
import Like from "./like.png";
import Happy from "./happy.png"
function EmojiCounter(props) {
  console.log("pic is ", props.pic);
  const [pic, setPic] = useState(Love);
  const [count, setCount] = useState(0);
  useEffect(() => { //useEffect hook updates pic state
    //essentially it tells which pic is interacted with!
    console.log("function called", props.pic);
    if (props.pic === "Love") setPic(Love);
    else if (props.pic === "Like") setPic(Like);
    else if (props.pic === "Sad") setPic(Sad);
    else if (props.pic === "Happy") setPic(Happy);
  });
  const ClickHandle = () => {
    setCount(count + 1);
  };//click event that executed when a prop(image) is clicked
  return (//rendering
    <div className="App">
      <p>
        {props.pic} <span></span>
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt="" />
        </button>
      </p>
    </div>
  );
}
export default EmojiCounter;
