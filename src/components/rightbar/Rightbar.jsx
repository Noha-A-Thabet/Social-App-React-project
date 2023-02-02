import "./rightbar.css";
import { FaBirthdayCake } from "react-icons/fa";
import { users } from "../../dummyData";
import Online from "./../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <FaBirthdayCake className="birthdayIcon" size="28" />
          <span className="birthdayText">
            {" "}
            <b> Pola Foster</b> and <b>3 Other Friends</b> Have A Birthday Today
          </span>
        </div>
        <img
          className="rightbarAd"
          src={require("../../assets/cafe-1869656_960_720.jpg")}
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };
  const profileRightbar = () => {
    return <h1>profile</h1>;
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar />
      </div>
    </div>
  );
}
