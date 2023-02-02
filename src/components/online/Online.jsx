import React from "react";
import "./online.css";
export default function Online({ user }) {
  const { name, img } = user;
  console.log(img);
  return (
    <li className="rightbarFRiend">
      <div className="rightbarProfileImgContainer">
        <img src={img} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{name}</span>
    </li>
  );
}
