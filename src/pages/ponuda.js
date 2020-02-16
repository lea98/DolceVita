import React from "react"

import {graphql} from "gatsby"
import Menu from "../components/Menu"
import Layout from "../components/layout"
//import SEO from "../components/seo"

const ponuda = ({data}) => (
  <Layout>
    <h1 style={{textAlign:"center",fontSize:"3em",margin:"2em 0 0 0"}}>TRENUTNO U PONUDI</h1>


<Menu items={data.menu} />

    </Layout>
)
//props-items
export default ponuda

export const query = graphql`
  {
    menu:allContentfulKolac{
      edges{
        node{
        id
          ime
          sastojak
          {sastojak}
          cijena
          category
          slika{
            fixed(height:200,width:200){
              ...GatsbyContentfulFixed_tracedSVG
            }
            
          }
                
        
    }
    }
    }
  }
`