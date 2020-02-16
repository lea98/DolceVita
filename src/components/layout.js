import React from "react"
import Navigation from "./navigation"
import "./layout.css"

const menuItems=[ 
  {
    text:"HOME",
    link: "/",
  },
  {
    text:"PONUDA",
    link: "/ponuda",
  },
  {
    text:"NARUČI",
    link: "/naruci",
  },
  {
    text:"INFO",
    link: "/info",
  },
 
  {
    text:"BLOG",
    link: "/blog",
  },

]




//const myStyles= {backgroundColor: "tomato", height: "100vh"}

//drugi nacin: <div className="layout">

const Layout = (props) => {
return(
 // tu moze style={myStyles} 
 <div> 
  <Navigation menuItems={menuItems}/>
  {props.children}


  
  </div>
)
}


export default Layout

//strelica return i kad zelimo vratit jednu komponentu npr. div ne tribaju nikakve zagrade, a kad nesto radimo, ispisujemo triba nam return 
//ako je vise stvari