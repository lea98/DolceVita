import React from "react"
//import Navigation from "../components/navigation"
import Layout from "../components/layout"
import {Link, graphql,useStaticQuery} from 'gatsby'
import blogIcon from "../blog-icon.png"



const Blog = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {fields: {slug: {regex: ""}}}) {
            edges {
              node {
                fields {
                  slug
                }
                html
                frontmatter {
                  date
                  title
                }
              }
            }
          }
    }
`)

//edges za array (objekta), a triba nam array jsx elemenata-map za konverziju 
//jos rijesit key
//tribamo dinamicki stvorit->slug

return (
<Layout>
    <h1 style={{textAlign:"center",fontSize:"3em"}}>DOBRODOŠLI NA BLOG!</h1>
    <h2 style={{textAlign:"center",fontSize:"2em",marginBottom:"2.5em"}}>Pronađite ukusne recepte</h2>

    <ol >
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li style={{borderStyle:"solid",borderColor:"pink",marginBottom:"2em",paddingLeft:"2em",backgroundColor:"white"}}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <span style={{fontSize:"1em"}}>{edge.node.frontmatter.title}</span>
                            <img src={blogIcon} style={{
                              width: "30px",
                              marginLeft: "10px",
                              marginTop: "5px"
                            }}></img>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
</Layout>
)
}

export default Blog

