import React from "react"

import Layout from "../components/layout"
import {StaticQuery,graphql} from "gatsby"
import cart from "../cart.jpg"

import Proizvod from "../components/Proizvod"

const nadiProizvod=graphql`
{
  menu:allContentfulKolac{
    edges{
      node{
      id
        ime
        cijena
        slika{
          fixed(height:200,width:200){
            src
            ...GatsbyContentfulFixed_tracedSVG
          }
          
        }
    
              
  }
  }
  }
}
`;
//komponenta staticquery dolazi s dva propsa, 
const  naruci =()=>(
<Layout>
<h1 style={{textAlign:"center",fontSize:"3em"}}>NARUČI</h1>  

  <StaticQuery query={nadiProizvod} render={data=>{
    return(

<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
  {data.menu.edges.map(({node:proizvod})=>{//desktr node, a prije toga ka alias postavimo proizvod
  //vracamo komponentu Prozivod. prvi je jedinstveni kljuc, a drugi je prop kojem proslijedimo cili node

return <Proizvod key={proizvod.id} proizvod={proizvod}/>;
  })}
  
  </div>

    );
  }}/>
  <div className="cart snipcart-checkout" > <img style={{width:"10em",height:"10em",margin:"3em"}} src={cart} alt="cart"/></div>

     </Layout>
 


)

export default naruci

