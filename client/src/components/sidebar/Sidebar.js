import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src = "https://s41230.pcdn.co/wp-content/uploads/2019/02/cooking-mental-health.jpeg" alt = "item img"/>
            {/* <img src = "https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour.jpg" alt = "item img"/> */}
            <p>
            HI! I’M LINDSAY.
             I’m a former 4th grade teacher, now full time blogger.
             My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.
            </p>
       </div>
       <div className="sidebarItem">
       <span className="sidebarTitle">CATEGORIES</span>
       <ul className="sidebarList">
            <li className="sidebarListItem">Desserts</li>
            <li className="sidebarListItem">Salads</li>
            <li className="sidebarListItem">Pasta</li>
            <li className="sidebarListItem">Soups</li>
            <li className="sidebarListItem">Vegetarian</li>
            <li className="sidebarListItem">Meal Prep</li>
       </ul>
       </div>
       <div className="sidebarItem">
       <span className="sidebarTitle">FOLLOW US</span>
       <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>

       </div>
       </div>
    </div>
  )
}

//https://www.helpguide.org/wp-content/uploads/cooking-hotpot.jpg
//https://s41230.pcdn.co/wp-content/uploads/2019/02/cooking-mental-health.jpeg
//https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg