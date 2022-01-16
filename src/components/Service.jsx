import React from 'react'
import Heading from './Heading'
// import logos from '../data'
import img1 from "../images/icon-blacklist.svg";
import img2 from "../images/icon-text.svg";
import img3 from "../images/icon-preview.svg";
import Servicebox from './Servicebox'
const Service = () => {
    const logos = [
        {
          img: img1,
          title: "Create blacklist",
          text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
        },
        {
          img: img2,
          title: "Plain text snippets",
          text: "Remove unwanted formatting from copied text for a consistent look.",
        },
        {
          img: img3,
          title: "Sneak preview",
          text: "Quick preview of all snippets on your Clipboard for easy access.",
        },
      ];
    return (
        <section className='service'>
            <Heading
            title='Supercharge your workflow'
            text='We’ve got the tools to boost your productivity.'
            />
            <div className="box-container">
                {
                    logos?.map(({img,title,text})=>(
                        <Servicebox
                        key={img}
                        img={img}
                        title={title}
                        text={text}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Service
