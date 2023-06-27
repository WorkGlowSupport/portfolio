import React, { useState } from 'react';
import "./projects.css"

const Projects = ({img, title, desc, link}) => {
    const [show, setShow] = useState(false);

  return (
    <a href= {link}>
        <div className='projects' 
         onMouseEnter={()=> setShow(true)}
         onMouseLeave={()=> setShow(false)}>
           {show ? (
            <div className='project_content'>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
           ):(
            <img className='project_image' src={img} alt="" />
           )}
        </div>
    </a>
  )
}

export default Projects;