import React from 'react'

const Servicebox = ({img,title,text}) => {
    return (
        <div className='box'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Servicebox
