import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import upitnici from "../upitnici.png"
import house from "../house.jpg"
import cakes from "../cakes.jpg"
import phone from "../phone.png"
import blog from "../blog.png"


const mobilePage = () => (
<Layout>
    <div  style={{display:"flex",flexDirection:"column",fontSize:"20px"}}>
    
    <div className="mobileDivs">
    <Link to="/"><img src={house}
        alt="house" className="mobileLogos" /></Link>
    <Link to="/" >HOME</Link>
    </div>

    <div  className="mobileDivs">
    <Link to="/ponuda">PONUDA</Link>

    <Link to="/ponuda"><img src={cakes}
        alt="cakes" className="mobileLogos"/></Link>
    </div>

 <div className="mobileDivs">
    <Link to="/naruci"><img src={phone}
        alt="phone" className="mobileLogos" /></Link>
        <Link to="/naruci">NARUČI</Link>
        </div>
 <div  className="mobileDivs">
 <Link to="/info">INFO</Link>

    <Link to="/info"><img src={upitnici}
        alt="upitnici" className="mobileLogos" /></Link>
</div>
 <div className="mobileDivs">
    <Link to="/blog"><img src={blog}
        alt="blog" className="mobileLogos" /></Link>
<Link to="/blog">BLOG</Link>
</div>

<div className="mobileDivs" style={{textAlign:"center",marginTop:"1em"}}>
    <Link to="/login" style={{marginRight:"4em"}}>LOG IN</Link>
    <Link to="/signup">SIGN UP</Link>
    </div>
    </div>
</Layout>
)

export default mobilePage

