import React from 'react';
import { Link } from 'react-scroll';
import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <h1 className='text-[32px]'>Develop<span>er</span></h1>
        </div>
        <div className="header__right">
            <Link to='about' smooth={true} duration={100}>
                <h4 className='text-[32px]'>About</h4>
            </Link>
            <Link to='skills' smooth={true} duration={100}>
                <h4>Skills</h4>
            </Link>
            <Link to='projects' smooth={true} duration={100}>
                <h4>Projects</h4>
            </Link>
            <Link to='exp' smooth={true} duration={100}>
                <h4>Experience</h4>
            </Link>
            <Link to='join' smooth={true} duration={100}>
                <h4 className='header__button'>join with me</h4>
            </Link>
        </div>
    </div>
  )
}

export default Header;