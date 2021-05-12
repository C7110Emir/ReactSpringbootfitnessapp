import React from 'react'
import Cardcontent from "./cardcontent"
import style from "./cardcontent.module.css"
import diets from "../workout"

function Cardcollection() {
    const cards = diets.map((element)=>{
        return(
        <Cardcontent image={element.image} title={element.name} preview={element.description} dos={element.dos} donts={element.donts}/>
        )
    })
    
    return (
        <div className={style.Cardcollection}>
            {cards}
            
        </div>
    )
}

export default Cardcollection;