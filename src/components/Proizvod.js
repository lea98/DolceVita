import React from "react"


export default function Proizvod({proizvod}){

    return (<div style={{display:"flex",justifyContent:"space-between", borderStyle:"solid",borderColor:"pink",backgroundColor:"white",width:"200px",height:"33px",padding:"0.3em",margin:"0.3em"}}>
<div style={{alignSelf:"center"}}>

<div style={{fontWeight:"bold"}}>
    {proizvod.ime}
</div>
<div>
    {proizvod.cijena} kn
</div>
</div>

<div style={{alignSelf:"center"}}>

<button className="snipcart-add-item" 
data-item-id={proizvod.id}
data-item-price={proizvod.cijena}
data-item-url="../" 
data-item-image={proizvod.slika.fixed.src}
data-item-name={proizvod.ime}

style={{height:"2em",width:"5em",margin:"0"}}>
    DODAJ
</button>
</div>    

</div>);

}