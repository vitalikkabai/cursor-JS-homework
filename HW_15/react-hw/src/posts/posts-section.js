import React from "react";

function Section(imgProps) {
  return (
    <div>
      <img src={imgProps.image} className="postsImg" alt="postIMG"></img>
    </div>
  );
}

export default Section;
