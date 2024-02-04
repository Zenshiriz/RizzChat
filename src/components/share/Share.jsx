import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img src="/assets/person/2.jpeg" alt="" className="share-top-img" />
          <input placeholder="whats in your mind" className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <MdPermMedia style={{color:"red"}} className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <MdLabel style={{color:"blue"}} className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <FaLocationDot style={{color:"green"}} className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <MdEmojiEmotions style={{color:"goldenrod"}} className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>

      </div>
    </div>
  );
}
