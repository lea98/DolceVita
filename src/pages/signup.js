import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const signup = () => (
  <Layout>
    <div id="signup-page">

      <h1>Sign up</h1>
      <Link to="/">Go back to the homepage</Link>
      <form action="/" method="GET" className="input-form">
        <input placeholder="Korisnicko ime" name="username" required></input>
        <br />
        <input placeholder="Ime" name="firstName" required></input>
        <input placeholder="Prezime" name="lastName" required></input>
        <br />
        <input placeholder="Lozinka" type="password" name="password" required></input>
        <br />

        <button type="submit">Sign Up</button>
      </form>

    </div>
    </Layout>
)

export default signup