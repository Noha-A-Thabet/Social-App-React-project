import "./sidebar.css";
import { ImFeed, ImUngroup, ImBookmark, ImQuestion } from "react-icons/im";
import { BsFillHddNetworkFill, BsFillCalendarEventFill } from "react-icons/bs";
import { users } from "../../dummyData";
import CloseFriend from "./../CloseFriend/closeFriend";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ImFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <ImUngroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <ImBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <ImQuestion className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <BsFillHddNetworkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <BsFillCalendarEventFill className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {users.map((u) => (
            <CloseFriend user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
