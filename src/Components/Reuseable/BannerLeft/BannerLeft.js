import React from 'react'
import Styles from './BannerLeft.module.scss'

function BannerLeft({ borderLeft, paddingLeft, color, heading, paddingTop, paragraph, marginLeft }) {
    
    const style = {
        marginLeft: marginLeft,
    }
    const style1={
        fontWeight: 'bold',
        borderLeft: borderLeft,
        paddingLeft: paddingLeft,
        color: color,
    }
    const style2={
        paddingTop:paddingTop,
        color:color,
    }
    return (
        <div style={style}>
            <h1 className={Styles.head} style={style1}>{heading}</h1>
            <p style={style2}>{paragraph}</p>
        </div>
    )
}

export default BannerLeft