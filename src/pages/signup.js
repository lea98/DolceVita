import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const signup = () => (
  <Layout>
    <div id="signup-page">
      

    <h1 style={{textAlign:"center",fontSize:"3em"}}>SIGN UP</h1>
    <h6 style={{textAlign:"center",fontSize:"1em",marginBottom:"2em"}}>Registrirajte se da biste imali više informacija i lakše naručivali željene proizvode. </h6>
      <li style={{borderStyle:"solid",borderColor:"pink",marginBottom:"auto",backgroundColor:"white"}}>
        
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
    </Layout>
)

export default signup