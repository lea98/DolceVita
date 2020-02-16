import React from "react"
import { Link } from "gatsby"
import logo from "../logo.jpg"
import insta from "../insta.jpg"
import face from "../face.png"
import twitter from "../twitter.png"
import "./navigation.css"
import hamburger from "../hamburger.png"


const LogoLink = () => (
    <Link to="/" >
      <img id="logo"
        src={logo}
        alt="logo"

      />
    </Link>
  )

  const InstaLink = () => (
    <a href="https://www.instagram.com/" >
      <img style={{height:"35px",width:"35px",padding:"0.5em"}}
        src={insta}
        alt="insta"
      />
    </a>
  )
  const FaceLink = () => (
    <a href="https://www.facebook.com/" >
      <img style={{height:"35px",width:"35px",padding:"0.5em"}}
        src={face}
        alt="face"

      />
    </a>
  )
  const TwitterLink = () => (
    <a href="https://www.twitter.com/" >
      <img style={{height:"35px",width:"35px",padding:"0.5em"}}
        src={twitter}
        alt="twitt"

      />
    </a>
  )

  const HambLink = () => (
    <Link to= "/mobilePage">
      <img className="hamburgerButton" style={{width:"30px",height:"30px"}}
        src={hamburger}
        alt="hamb"

      />
    </Link>
  )


const Navigation = ({menuItems}) =>{
    const menus= menuItems.map(({link, text}) => (
        <li  key={link}>
      <Link to={link}  activeClassName="active" >{text}</Link> 
        </li>
       ))

       return (
         <div>
        <div id="header">
            <LogoLink />
            <ul className="headerElements">{menus} </ul>
            <HambLink />
        </div>

     

    <div id="footer">

<div style={{display:"flex",padding:"0.5em"}}>
    <InstaLink />
    
    <FaceLink />
    <TwitterLink />
  </div>

  <div style={{padding:"2em"}}>
<Link to="/signup" activeClassName="active" style={{padding:"1.5em"}}>
SIGN UP
</Link>
<Link to="/login" activeClassName="active" >
LOG IN
</Link>

  </div>

    </div>

    </div>
      )
   }

export default Navigation

//problem each child... unique key... je ode u komponenti i bila bi sporija stranica
//svaki child mora imat jedinstveni property koji se zove key, trebamo dodat key element, a to su nam li
//key moze bit link jer je jedinstven