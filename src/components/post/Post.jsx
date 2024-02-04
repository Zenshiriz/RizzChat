import "./post.css";
import { IoMdMore } from "react-icons/io";
import {Users} from "../../dummyData"
import { useState } from "react";

export default function Post(props) {
  const {post} = props;
  const [like ,setLike] = useState(post.like)
  const [isLiked ,setIsLiked] = useState(false)
  const likePost = ()=>{
    setLike(like => isLiked? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={Users.filter(user => user.id === post.id)[0].profilePicture}
              alt=""
              className="post-profile-img"
            />
            <span className="post-username">{Users.filter(user => user.id === post.id)[0].username}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <IoMdMore />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img src={post.photo} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" className="like-icon" onClick={likePost} />
            <img src="/assets/heart.png" alt="" className="like-icon" onClick={likePost} />
            <span className="post-like-counter">{like} likes</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
