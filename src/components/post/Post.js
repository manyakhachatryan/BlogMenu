import "./post.css"
export default function Post() {
  return (
    <div className="post">
       <img
       className="postImg"
        src = "https://pinchofyum.com/wp-content/uploads/Broccoli-Cheese-Soup-1-2.jpg" 
        alt = "img src"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Quick and Easy</span>
                <span className="postCat">Soup</span>
            </div>
            <span className="postTitle">
            Broccoli Cheese Soup Necessities
            </span>
            <hr/>
            <span className="postDate">1 hour age</span>
        </div>
        <p className="postDesc">
        It will. The bacon is optional, but SUPER good! A faster alternative is skipping the bacon but sauteeing your veggies in reserved bacon fat or smoked paprika – you keep bacon fat in your fridge, right?! TIME TO START.
        </p>
    </div>
  )
}
