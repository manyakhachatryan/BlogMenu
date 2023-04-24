import './settings.css'
import Sidebar from '../../../components/sidebar/Sidebar'
export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form  className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src = "https://avatars.githubusercontent.com/u/90526363?s=400&u=9a1f5a8d318f05b5209df84e23fec9f435d74afd&v=4"/>
            <label htmlFor = "fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type = "file" id = "fileInput" style = {{display: "none"}} />
          </div>
          <label>Username</label>
          <input type = "text" placeholder='Safak'/>
          <label>Email</label>
          <input type = "email" placeholder='safak@gmail.com'/>
          <label>Password</label>
          <input type = "password" placeholder='Safak'/>
          <button className='settingsSubmit'>Update</button>
        </form>
      </div> 
      <Sidebar/>
    </div>
  )
}

