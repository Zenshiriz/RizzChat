import "./navbar.css";
import { HiSearch } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="left-nav">
        <h1 className="logo">RizzChat</h1>
      </div>
      <div className="center-nav">
        <div className="search-div">
          <HiSearch />
          <input
            placeholder="search for any post or friend"
            className="search-input"
          />
        </div>
      </div>
      <div className="right-nav">
        <ul className="link-list">
          <li className="link-li">Home</li>
          <li className="link-li">Timeline</li>
        </ul>
        <div className="profile-icons">
          <div className="profile-div">
            <IoMdPerson />
            <span className="icon-badge">1</span>
          </div>
          <div className="profile-div">
            <IoChatbubble />
            <span className="icon-badge">1</span>
          </div>
          <div className="profile-div">
            <IoIosNotifications />
            <span className="icon-badge">1</span>
          </div>
        </div>
        <img src="/assets/person/2.jpeg" alt="" className="profile-img" />
      </div>
    </div>
  );
}
