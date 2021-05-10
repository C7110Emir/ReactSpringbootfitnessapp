import React from 'react'
import NavBar from "./navbar/navbar"
import Cardcollection from "./cardcontent/cardcollection"
import MapContainer from "./rightsidecontent/rightcontent"
import style from "./homepage.module.css"

function FirstHomePage() {
    return (
        <div className="navbar">
            <NavBar />
            <div className={style.uppercontent}>
                <Cardcollection/>
                <MapContainer/>
            </div>
            
        </div>
    )
}

export default FirstHomePage;