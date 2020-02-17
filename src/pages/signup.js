import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import "./info.css"

const signup = () => (
  <Layout>
    <div id="signup-page">
    <div style={{display:"flex", flexWrap: "wrap",justifyContent: "center",marginBottom:"10em"}}>

<div className="infoStil">

    <h1 style={{textAlign:"center",fontSize:"3em"}}>SIGN UP</h1>
    <h6 style={{textAlign:"center",fontSize:"1em",marginBottom:"2em"}}>Registrirajte se da biste imali više informacija i lakše naručivali željene proizvode. </h6>
      <li>
        
      <form action="/" method="GET" className="input-form">
        <input placeholder="Korisnicko ime" name="username" required></input>
        <br />
        <input placeholder="Ime" name="firstName" required></input>
        <br/>
        <input placeholder="Prezime" name="lastName" required></input>
        <br />
        <input placeholder="Lozinka" type="password" name="password" required></input>
        <br />

        <button type="submit">Sign Up</button>
      </form>
      </li>
      </div>
      </div>
      </div>

    </Layout>
)

export default signup