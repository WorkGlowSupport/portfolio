import React from 'react'
import { Link } from 'react-scroll';
import "./topContent.css";


const topContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Bharanidharan Ravi</h1>
            <p>A Professional web and app developer</p>
            <div className="topContent__button">
                <a href="www.google.com">
                    <button className='download_CV'>Download CV</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='my_project'>My project</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default topContent