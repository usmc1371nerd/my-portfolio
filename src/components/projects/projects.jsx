import React from 'react'
import './projects.css'
import Tagged from '../../assets/Tagged.png'
import Dev from '../../assets/devconnect.png'
import Pinelog from '../../assets/pinelog.png'
import Shooter from '../../assets/shooter.png'
import Github from '../../assets/Github.png'
import { useState } from 'react'
import Project from './project/project'


const Projects = () => {
  const [ rotate, setRotate ] = useState(false)
  return ( 
   <section id='projects'> 
   <h2 className='project__title'>Projects or Websites</h2>
   <div className="project__container">
   <Project title="Github" link="https://github.com/usmc1371nerd" img={Github} />
   <Project title="Taggedbham" link="https://taggedbham.com/" img={Tagged} />
   <Project title="Devconnect" link="https://devconnect.live/" img={Dev} />
   <Project title="Pinelog Church" link="https://pinelogcommunitychurch.com/" img={Pinelog} />
   <Project title="Shooting Note App" link="" img={Shooter} />
  
   
  </div>
    </section>
 
    
  )
}

export default Projects