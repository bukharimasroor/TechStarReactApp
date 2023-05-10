import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
}from "react-icons/ai"; 

const Home = () => {
  return  (
    <>
 <div className='home' id ='home'> Home
<main>
<h1>TechStar</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odit.</p>
</main>
</div>

<div className="home2">
<img src={vg} alt="Graphics" />


<div>
<p>
We are your one and only solution to the tech problems you face
every day. We are leading tech company whose aim is to increase the
problem solving ability in children.
</p>
</div>
</div>
<div className="home3" id="about">
    <div>
        <h1>Who We Are</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tenetur. Similique optio minus praesentium modi quaerat fuga nostrum corrupti recusandae. Unde eligendi commodi deserunt animi, 
            neque quo nobis quasi facere?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla praesentium deserunt earum, iste nesciunt ut asperiores non eaque ratione, laborum iusto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, sapiente! Libero repellat a deleniti beatae corporis, nostrum obcaecati veniam nulla dolor asperiores? Voluptate facere perferendis vitae recusandae incidunt ab ipsam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis non laudantium doloremque animi expedita omnis, vero cupiditate consequuntur veritatis dolorem debitis quos in distinctio. Vitae odio ex laudantium sit asperiores!
        </p>
    </div>
</div>

<div className="home4" id="brands">
    <div>
        <h1>Brands</h1>
        <article>
            
            <div style={{
                animationDelay:"0.3s"
            }}>
            <AiFillGoogleCircle/> 
            <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
            <AiFillAmazonCircle/> 
            <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s"
            }}>
            <AiFillInstagram/> 
            <p>Instagram</p>
            </div>
            <div style={{
                animationDelay:"0.9s"
            }}>
            <AiFillYoutube/> 
            <p>Youtube</p>
            </div>
            
        </article>
    </div>
</div>
</>
  )
}
export default Home