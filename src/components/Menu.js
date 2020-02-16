//class based component¸
import React, { Component} from 'react'
import Img from 'gatsby-image'
import "./MenuButtonStyle.css"

//u bazi kategorije-torta i kolac

//fja za izvlacenje kategorije, prosljedujemo items, koristimo map za loop kroz array
const getCategories = items =>{
    let temp=items.map(items=>{

        return items.node.category;
        
    }); //kako bi se eliminiralo 20 botuna, moglo se i sa reduce
    let tempCat=new Set(temp);
    let categories=Array.from(tempCat);
    categories=["SVI", ...categories]; //svi + sve sta imamo u nizu(kolaci i torte)...

    return categories;
}

export default class Menu extends Component{



//console.log(props.items)-daje array od 20
constructor(props){
    super(props)
this.state={ //kreiramo novi state, objekt sa svojstvima items-array, ponudaItems-tribat ce za filtriranje, categories
    items:props.items.edges,
    ponudaItems:props.items.edges,
    categories:getCategories(props.items.edges), //niz edgesa u fju
    activeCategory: "SVI"
};
}
handleItems = category => {
//spred operator, trazimo stanje i dohvacamo sve items (original iz graphql)
    let tempItems=[...this.state.items];
    this.setState({ activeCategory: category })
    if(category==="SVI") {
        this.setState(() => {
            return{ ponudaItems: tempItems }
     })
    }
    else {
        let items = tempItems.filter(({node})=>node.category===category); //desktrukturiraj node i vrati ako je node.category jednak kategoriji
        this.setState(()=>{
            return {ponudaItems:items}
        });
    }
};
// za button.map metoda, pristupamo category, i dohvacamo index za jedinstvenu id(react), vracamo za svaki item button(key jer renderiramo listu)
render(){
    if(this.state.items.length>0){ //znamo da imamo vrijednosti ako je vece od 0
        
    return (
      

<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"2em"}}>

<div>
    {this.state.categories.map((category,index) => {
        let catColor = "white"
        if (category === this.state.activeCategory) {
            catColor = "pink"
        }
        return(
            <button type="button" key={index} style={{backgroundColor: catColor}} onClick={()=>{this.handleItems(category)}}>{category}</button>
        )
    })}
</div>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginBottom:"100px"}}>

{this.state.ponudaItems.map(({node})=>{//loop kroz array +destrukturiranje nodea, pa doli mozemo pristupit node.id-u itd, arrow fja, return je jsx
    return(
        <div key={node.id} style={{borderStyle:"solid",borderColor:"pink",margin:"1em"}}> 
            <div style={{display:"flex",flexDirection:"column",padding:"2em"}}>
                <span style={{fontSize:"2em"}}>{node.ime}</span> 
                <br></br>
                <Img fixed={node.slika.fixed}/>
                <br></br>

                <span>{node.cijena} kn/kg</span> <br></br>
                <span style={{maxWidth:"200px"}}>Sastojci: {node.sastojak.sastojak}</span>

            </div>
            </div>
    );
})}

</div>
</div>

    );
    }else{ //ako je vrijednost prazan array (nema kolaca/torti trenutno), prikazemo poruku
        return(
            <h1>Nema podataka za prikaz</h1>


        );
        }
        
    }

}