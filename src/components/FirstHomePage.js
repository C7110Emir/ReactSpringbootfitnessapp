import React from 'react'
import NavBar from "./navbar/navbar"
import Cardcollection from "./cardcontent/cardcollection"
import Rightcontent from "./rightsidecontent/rightcontent"
import style from "./homepage.module.css"

function FirstHomePage() {
    return (
        <div className="navbar">
            <NavBar />
            <div className={style.uppercontent}>
                <Cardcollection/>
                <Rightcontent/>
            </div>
            
        </div>
    )
}

export default FirstHomePage;