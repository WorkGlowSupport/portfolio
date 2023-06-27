import React from 'react'
import { LinearProgress } from '@mui/material';
import { Element } from 'react-scroll';
import "./skills.css";
import skilImage from "../../assets/Hire-MERN-Stack-Developers.png"

const Skills = () => {
  return (
    <Element className='skills'>
        <div className="skillsImage">
            <img src={skilImage} alt="" />
        </div>
        <div className="skillsText">
            <h2>SKILL SET</h2>
            <div className="skill_container">
                <h5>React</h5>
                <div className="skill_container_slider skill_container_slider1">
                    <LinearProgress  variant='determinate' value={85}/>
                </div>
            </div>
            <div className="skill_container">
                <h5>Node/Express js</h5>
                <div className="skill_container_slider skill_container_slider2">
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className="skill_container">
                <h5>JavaScript</h5>
                <div className="skill_container_slider skill_container_slider3">
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className="skill_container">
                <h5>MongoDB</h5>
                <div className="skill_container_slider skill_container_slider4">
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className="skill_container">
                <h5>HTML/CSS</h5>
                <div className="skill_container_slider skill_container_slider5">
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skills