import React from "react";
import verifiedAccsvg from "../img/twitter-verified-badge.svg";

function Header(authorInfo) {
  console.log(authorInfo);
  return (
    <div>
      <div className="postsHeader">
        <div className="avatar">
          <img src={authorInfo.author.photo} className="img" alt="Avatar"></img>
        </div>
        <div className="postsInfo">
          <div className="personInfo">
            <span className="boldFont">{authorInfo.author.name}</span>
            <span>
              <img
                src={verifiedAccsvg}
                className="verifiedAccSvg"
                alt="verified"
              ></img>
            </span>
            <span className="greyFonts">{authorInfo.author.nickname}</span>
            <span className="greyFonts">·</span>
            <span className="greyFonts">{authorInfo.date}</span>
            <div className="moreButton"></div>
          </div>
          <div className="postsMassage">{authorInfo.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
