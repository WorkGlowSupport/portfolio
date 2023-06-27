import React from 'react'
import { Element } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../../styles";
import {experiences} from "../../constants/index";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
  contentStyle={{background: "#1d1836", color:"#fff" }}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index)=>(
        <li key={`experience-point-${index}`} 
        className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
        </li>
      ))}
    </ul>
    {experience.date}
  </VerticalTimelineElement>
)
const Experience = () => {

  return (
    <>
    <Element name='exp' className=' pt-20'>
      <div className=' text-center'>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
        <p className={styles.sectionSubText}>
          What I have so far
        </p>
        </div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index)=> (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </Element>
    </>
  )
}

export default Experience;