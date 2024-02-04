import "./closeFriend.css";

export default function CloseFriend(props) {
    const {user} = props
  return (
    <li className="sidebar-friend">
      <img className="sidebar-friend-img" src={user.profilePicture} alt="" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
}
