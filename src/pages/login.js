import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const login = () => (
  <Layout>
    <div id="login-page">

    <h1 style={{textAlign:"center",fontSize:"3em"}}>LOG IN</h1>
    <h6 style={{textAlign:"center",fontSize:"1em",marginBottom:"2em"}}>Prijavite se i uživajte u slasticama. </h6>
    <li style={{borderStyle:"solid",borderColor:"pink",marginBottom:"auto",backgroundColor:"white"}}>
      <form action="/" method="GET" className="input-form">
        <input placeholder="Korisnicko ime" name="username" required></input>
        <br />
        <input placeholder="Lozinka" type="password" name="password" required></input>
        <br />
        <button type="submit">Login</button>
      </form>
      </li>
    </div>
    </Layout>
)

export default login