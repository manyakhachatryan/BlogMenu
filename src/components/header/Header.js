import React from "react";
import "./header.css"
export default function Header(){
    return (
        <div className="header">
           <div className="headerTitles">
                <span className="headerTitleSm">My Menu</span>
                <span className="headerTitleLg">Blog</span>
           </div>
           {/* <img className="headerImg" src = "https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg" alt = "headerImg"/> */}
           <img className="headerImg" src = "https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour.jpg" alt = "headerImg"/>
        </div>
    )
}