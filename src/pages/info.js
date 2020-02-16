import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import "./info.css"

const info = ({data}) => (
  <Layout>
  <div className="infoKlasa">
    <h1 >O NAMA</h1>
    

    <div style={{display:"flex", flexWrap: "wrap",justifyContent: "center",marginBottom:"10em"}}>

<div className="infoStil">
<h2>INFO</h2><br></br>
Dobrodošli u naš šaren svijet kolača i torti. U našoj bogatoj ponudi možete pronaći slastice po svom ukusu te ih jednostavno naručiti iz udobnosti svog doma. Ako se ipak želite prošetati, čekamo vas u Splitu u Dioklecijanovoj palači.
</div>

<div className="infoStil">
<h2 >KONTAKT</h2><br></br>
<strong>TELEFON</strong>: 021/111 111 <br></br><br></br>
<strong>MOBITEL</strong>: 098/1111 111<br></br><br></br>
<strong>MAIL</strong>: dolcevita123@gmail.com<br></br><br></br>
<strong>ADRESA</strong>: Dioklecijanova ulica 3, Split
</div>

<div className="infoStil">
<h2 >LOKACIJA</h2>

{data.allFile.edges.map(({node})=>(
  <Img style={{width:"100%",marginLeft:"auto",marginRight:"auto"}} key={node.id} fluid={node.childImageSharp.fluid}/>
))}

</div>

    </div>
    


    </div>
    </Layout>
)

export default info

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images/info//"}}) {
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