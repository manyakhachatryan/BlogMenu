import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src = "https://pinchofyum.com/wp-content/uploads/Sunday-Chili-with-Avocado.jpg"
                className="singlePostImg"
                alt = "imgSrc"
                />
              <h1 className="singlePostTitle"> The Best Sunday Chili
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
              </h1> 
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b>Safak</b></span>
                <span className="singlePostDate"> 1 hour ago</span>
            </div>
            <p className="singlePostDesc">Here’s the thing – I do love chili. But here’s the other thing – I’m kind of picky about chili. I like chili that is:

Thick! Mega thick.
Chunky, but small, even chunks – no huge pieces of tomato, please.
Spicy, but not like fire-in-your-mouth spicy. Just the cozy, warming, winter afternoon kind of spicy.
Beany in moderation. I want to know that the beans are there, but not be thinking about beans with every bite.
So… with that, I’d like to introduce you to my new favorite Sunday Chili.

</p>
         </div>
    </div>
  )
}
