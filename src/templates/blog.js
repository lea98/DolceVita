import React from 'react'
import { Link,graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
//template za svaki post
//dangerouslyset-jer koristimo html u queyju
const Blog = (props) => {
    return (
        <Layout>
            <div style={{borderStyle:"solid",borderColor:"pink",padding:"2em"}}>
            <h1 style={{textAlign:"center"}}>{props.data.markdownRemark.frontmatter.title}</h1>
            <p style={{textAlign:"right"}}>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            <br></br>
            <div style={{textDecoration:"underline"}}><Link to="/blog">Vrati se na sve objave</Link></div>
            </div>
        </Layout>
    )
}

export default Blog