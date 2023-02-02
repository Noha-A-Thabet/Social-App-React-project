import React from "react";
import "./Profile.css";
import Tobbar from "./../../components/tobbar/Tobbar";
import Sidebar from "./../../components/sidebar/Sidebar";
import Feed from "./../../components/feed/feed";
import Rightbar from "./../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Tobbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={require("../../assets/tech.jpg")}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={require("../../assets/sss.jpg")}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaglue</h4>
              <span className="profileInfoDesc">Hello My Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
