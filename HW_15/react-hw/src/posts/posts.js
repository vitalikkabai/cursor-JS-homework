import React from "react";
import Header from "./posts-header";
import Section from "./posts-section";
import Lables from "./posts-lables";

function Posts(props) {
  return (
    <div className="post">
      <Header author={props.author} content={props.content} date={props.date} />
      <Section image={props.image} />
      <Lables />
    </div>
  );
}

export default Posts;
