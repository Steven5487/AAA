import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const comment = {
  date: new Date(),
  text: "I hate you fucking shit!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

ReactDOM.render(
  <App date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);
