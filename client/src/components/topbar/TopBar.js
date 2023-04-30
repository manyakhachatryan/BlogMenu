import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'
export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/' style = {{textDecoration: "none", color : "inherit"}}>HOME </Link>
                </li>
                <li className='topListItem'>
                <Link to='/' style = {{textDecoration: "none", color : "inherit"}}>ABOUT </Link>
                </li>
                <li className='topListItem'>
                <Link to='/' style = {{textDecoration: "none", color : "inherit"}}>CONTACT </Link>
                </li>
                <li className='topListItem'>
                <Link to='/write' style = {{textDecoration: "none", color : "inherit"}}>WRITE </Link>
                </li>
                <li className='topListItem'>
                <Link to='/' style = {{textDecoration: "none", color : "inherit"}}> {user && "LOGOUT"} </Link>
                </li>
            </ul>
        </div>
        <div className='topRight'>
          {
            user ? (
              <img  className='topImg'
              src = "https://avatars.githubusercontent.com/u/90526363?s=400&u=9a1f5a8d318f05b5209df84e23fec9f435d74afd&v=4"
              alt = "profile img"
              />
            ) :  (
              <ul className='topList'>
                <li className='topListItem'>
              <Link  to='/login' className='link'style = {{textDecoration: "none", color : "inherit"}} >LOGIN</Link>
                   </li>
                   <li className='topListItem'>
              <Link className='link' style = {{textDecoration: "none", color : "inherit"}} to='/register'>REGISTER</Link>
              </li>
              </ul>
            )
          }
          
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
