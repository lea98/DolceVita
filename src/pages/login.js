import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import "./info.css"

const login = () => (
  <Layout>
        <div style={{display:"flex", flexWrap: "wrap",justifyContent: "center",marginBottom:"10em"}}>

    <div className="infoStil">
    <h1 style={{textAlign:"center",fontSize:"3em"}}>LOG IN</h1>
    <h6 style={{textAlign:"center",fontSize:"1em",marginBottom:"2em"}}>Prijavite se i uživajte u slasticama. </h6>
    <div id="login-page">
    <li>
      <form action="/" method="GET" className="input-form">
        <input placeholder="Korisnicko ime" name="username" required></input>
        <br />
        <input placeholder="Lozinka" type="password" name="password" required></input>
        <br />
        <button type="submit">Login</button>
      </form>
      </li>
    </div>
    </div>
    </div>
    </Layout>
)

export default login