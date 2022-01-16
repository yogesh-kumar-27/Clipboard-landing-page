import React from 'react'

const Heading = ({title,text}) => {
    return (
        <section className="heading">
        <div className="content">
          <h2>{title}</h2>
         <div className="para">
         <p>
           {text}
          </p>
         </div>
        </div>
      </section>
    )
}

export default Heading
