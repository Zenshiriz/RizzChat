import Navbar from "../../components/Navbar/Navbar"
import Feed from "../../components/feeds/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
export default function Home() {
  return (
    <>
   <Navbar/>
   <div className="home-container">
   <Sidebar/>
  <Feed/>
  <Rightbar/>
   </div>
    </>
  )
}
