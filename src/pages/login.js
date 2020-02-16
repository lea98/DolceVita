import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const login = () => (
  <Layout>
    <div id="login-page">

      <h1>Log in</h1>
      <Link to="/">Go back to the homepage</Link>
      <form action="/" method="GET" className="input-form">
        <input placeholder="Korisnicko ime" name="username" required></input>
        <br />
        <input placeholder="Lozinka" type="password" name="password" required></input>
        <br />
        <button type="submit">Login</button>
      </form>

    </div>
    </Layout>
)

export default login