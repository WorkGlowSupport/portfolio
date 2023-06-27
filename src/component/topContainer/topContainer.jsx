import React from 'react';
import "./topContainer.css";
import { Element } from 'react-scroll';
import TopContent from '../topContent/topContent';

const TopContainer = () => {
  return (
   <>
     <Element name='about' className='topContainer'>
        <TopContent/>
        
     </Element>
     <hr className='line'/>
   </>
  )
}

export default TopContainer