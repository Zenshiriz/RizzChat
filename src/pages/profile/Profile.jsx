import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";
export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar profile />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">

            <img src="/assets/post/3.jpeg" className="profile-cover-img" alt="" />
            <img src="/assets/person/7.jpeg" className="profile-user-img" alt="" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Mohammad</h4>
              <span className="profile-info-desc">lalala lal ala lala</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
