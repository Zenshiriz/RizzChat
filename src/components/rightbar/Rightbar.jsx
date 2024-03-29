import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
         <div className="birthday-container">
        <img src="assets/gift.png" alt="" className="birthday-img" />
        <span className="birthday-text">
          <b>shizzi</b> and <b>3 other friends </b> have a birthday today
        </span>
      </div>
      <img src="/assets/ad.png" alt="" className="rightbar-ad" />
      <h4 className="rightbar-title">Online Friends</h4>
      <ul className="rightbar-friend-list">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
      </>
    );
  };
 

  const ProfileRightbar = ()=>(
    <>
    <h4 className="rightbar-title">User Infomation</h4>
    <div className="rightbar-info">
      <div className="rightbar-info-item">
        <span className="rightbar-info-key">City:</span>
        <span className="rightbar-info-value">New York</span>
      </div>
      <div className="rightbar-info-item">
        <span className="rightbar-info-key">From:</span>
        <span className="rightbar-info-value">Madrid</span>
      </div>
      <div className="rightbar-info-item">
        <span className="rightbar-info-key">Relationship:</span>
        <span className="rightbar-info-value">Single </span>
      </div>
    </div>
    <h4 className="rightbar-title">User Friends</h4>
    <div className="rightbar-followings">
      <div className="rightbar-following">
        <img src="/assets/person/1.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/2.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/3.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/4.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/5.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/6.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/7.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
      <div className="rightbar-following">
        <img src="/assets/person/8.jpeg" alt="" className="rightbar-following-img" />
       <span className="rightbar-following-name">jannu kartus</span>
      </div>
    </div>
    </>
  )
  return (
    <div className={`rightbar ${profile ? "dont-hide": null}`}>
      <div className="rightbar-wrapper">
        {profile ?<ProfileRightbar/>: <HomeRightbar/>}
      </div>
    </div>
  );
}
