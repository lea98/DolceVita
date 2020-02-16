import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"

//import { Link } from "gatsby"

// ne triba jer cemo dodat u layout: import Navigation from "../components/navigation"
//importamo layout
import Layout from "../components/layout"

//import Image from "../components/image"
//import SEO from "../components/seo"

/*
const menuItems=[ //niz u kojem su svi linkovi
  {
    text:"Ocjenjivanje",
    link: "/ocjenjivanje",
  },
  {
    text:"Predavanja",
    link: "/predavanja",
  },
  {
    text:"Projekt",
    link: "/projekt",
  },
  {
    text:"Blog",
    link: "/blog",
  },

]
*/

const IndexPage = ({data}) => (
  <Layout>
    <div style={{right:"0",left:"0",top:"45px",marginBottom:"10em"}}>
    <div style={{position:"relative"}}>
    
{data.allFile.edges.map(({node})=>(
  <Img style={{width:"80%",marginTop:"100px",marginLeft:"auto",marginRight:"auto"}} key={node.id} fluid={node.childImageSharp.fluid}/>
))}

<h1 style={{position: "absolute",
  top: "5%",
  left: "50%",fontSize:"8vw", fontStyle:"italic",  transform: "translate( -50%, -50% )"}}>Dolce Vita</h1>

</div>
<h2 style={{textAlign:"center",fontSize:"2vw"}}>Dobrodošli u slatki svijet torti, kolača i ostalih delicija!</h2>
</div>
  </Layout>
)

export default IndexPage



export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images/naslovna//"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid_tracedSVG

            }
          }
        }
      }
    }
  }
`



//<Img> kompontenta za unos slika, blura ih...
//map fja podrzava js array, za svaki element niza primjeni funkciju koju zadamo i vrati novi array s primjenjenom fjom

//viticaste zagrade tribaju jer pisemo js kod unutar ovih tagova
//<ul>
//{
//  menuItems.map(menuItem => (
 //  <li>
// <Link to={menuItem.link}>{menuItem.text}</Link>
 //  </li>
//  )) }
//</ul>
//destrukturiranje primjenjeno gori , a mozemo i bez to je ovo povise
//zelimo header pa od tog napravimo komponentu koju cemo izdvojiti, npr navigation komponenta i ukljucimo je na sve str