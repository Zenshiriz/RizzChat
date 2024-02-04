import "./sidebar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <MdOutlineRssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <IoChatbox />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <FaPlay />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <MdGroup />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <FaBookmark />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <FaRegQuestionCircle />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebar-list-item">
          <MdOutlineWorkOutline />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebar-list-item">
          <MdEvent />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebar-list-item">
          <MdSchool />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show more</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
        {Users.map(user=>(
          <CloseFriend key={user.id} user={user}/>
        ))}
        </ul>
      </div>
    </div>
  );
}
