import React from 'react'
import { Element } from 'react-scroll';
import Projects from '../projects/projects';
import "./projectContainer.css";

const ProjectContainer = () => {
    const myProjects = [
        {
            img :"https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            title : "Zomoto",
            desc: "I making zomoto clone with with all function of the real zomoto such as login, choosing meal type, make a order, and make payment with razor pay",
            link : "www.google.com"
        },
        {
            img :"https://static.vecteezy.com/system/resources/thumbnails/003/468/449/original/space-flight-through-the-orion-nebula-4k-3d-free-video.jpg",
            title : "Zomoto",
            desc: "I making zomoto clone with with all function of the real zomoto such as login, choosing meal type, make a order, and make payment with razor pay",
            link : "www.google.com"
        },
        {
            img :"https://4kwallpapers.com/images/walls/thumbs_2t/10944.jpg",
            title : "Zomoto",
            desc: "I making zomoto clone with with all function of the real zomoto such as login, choosing meal type, make a order, and make payment with razor pay",
            link : "www.google.com"
        },
        {
            img :"https://wallpaperaccess.com/full/435988.jpg",
            title : "Zomoto",
            desc: "I making zomoto clone with with all function of the real zomoto such as login, choosing meal type, make a order, and make payment with razor pay",
            link : "www.google.com"
        },
        {
            img :"https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            title : "Zomoto",
            desc: "I making zomoto clone with with all function of the real zomoto such as login, choosing meal type, make a order, and make payment with razor pay",
            link : "www.google.com"
        },
    ]
  return (
    <Element name='projects' className='project_container'>
        <h1>My Projects</h1>
        <p>Here are some project which i have done for lives of people easy.</p>
        <div className='projectsContainer_project'>
            {myProjects.map((Project, index)=>{
                return(
                    <Projects 
                        key={index}
                        img ={Project.img}
                        title={Project.title}
                        desc = {Project.desc}
                        link = {Project.link}
                        />
                )
            })}
        </div>
    </Element>
  )
}

export default ProjectContainer;