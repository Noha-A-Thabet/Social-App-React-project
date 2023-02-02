import "./Tobbar.css";
import {
  BsSearch,
  BsFillPersonFill,
  BsFillChatSquareFill,
} from "react-icons/bs";

import { IoMdNotifications } from "react-icons/io";
export default function Tobbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input
            placeholder="Search For Friend,Post Or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill size={20} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatSquareFill size={20} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoMdNotifications size={20} />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          className="tobparImage"
          src={require("../../assets/1.jpg")}
          alt="img"
        />
      </div>
    </div>
  );
}
