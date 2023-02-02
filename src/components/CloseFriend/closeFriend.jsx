import React from "react";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const { name, img } = user;
  return (
    <li className="sidebarFriend">
      <img src={img} className="sidebarFriendImage" alt="" />
      <span className="sidebarFriendName">{name}</span>
    </li>
  );
}
