import React from 'react'
import Cardcontent from "./cardcontent"
import style from "./cardcontent.module.css"

function Cardcollection() {
    return (
        <div className={style.Cardcollection}>
            <Cardcontent title="sdgsdhsdhsd" preview="asfasnfasunfasnfuasnfasfsa" />
            <Cardcontent title="asgdgadsgas" preview="asdgsdgasgasdgasd"/>
            <Cardcontent title="sadgasdgasdngas" preview="dgasdgiasdjgjasdiga"></Cardcontent>
        </div>
    )
}

export default Cardcollection;