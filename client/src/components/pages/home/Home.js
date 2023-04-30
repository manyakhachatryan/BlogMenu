import Header from "../../header/Header" 
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import Topbar from '../../topbar/TopBar.js'
import "./home.css"

export default function Home (){
    return (
      <>
      <Topbar/>
      <Header/>
      <div className="home">
          <Posts/>
          <Sidebar />
      </div>
      </>
    )
}