import React from 'react'
import style from "./cardcontent.module.css"

function Cardcontent(props) {
    return (
        <div className ={style.Cardmain}>
            <div className={style.imgcontent}>
                <img src="" alt="Fitness Image" className={style.fitnessimg}/>
            </div>
            <div className={style.textcontent}>
                <h2 className={style.cardtitle}>{props.title}</h2>
                <h4 className={style.cardpreview}>{props.preview}</h4>
            </div>
            
        </div>
    )
}

export default Cardcontent;