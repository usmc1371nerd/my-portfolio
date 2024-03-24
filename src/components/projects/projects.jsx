import React from 'react'
import './projects.css'

import GlassPanda from '../../assets/glass-panda.png'
import Pinelog from '../../assets/pinelog.png'
import Shooter from '../../assets/shooter.png'
import Github from '../../assets/Github.png'




const Projects = () => {
  
  return ( 
   <section id='projects'> 
   <h2 className='project__title'>Code / Websites</h2>


   
   <div className="project__container">
   <a href='https://github.com/usmc1371nerd' title="Github" ><img src={Github} className='github' alt="github-img"/></a>
   <a href='https://pinelogcommunitychurch.com' title="Github" ><img src={Pinelog} className='pinelog' alt="pinelog-img"/></a>
   <a href='https://github.com/usmc1371nerd/shootingnotes.github.io' title="Github" ><img src={Shooter} className='shooter' alt="shooter-img"/></a>
   <a href='https://glasspandaeats.com' title="GlassPanda" ><img src={GlassPanda} className='shooter' alt="shooter-img"/></a>

   
   
   {/* <a href='' title="Taggedbham" link="https://taggedbham.com/" img={Tagged} />
   <a href='' title="Devconnect" link="https://devconnect.live/" img={Dev} />
   <a href='' title="Pinelog Church" link="https://pinelogcommunitychurch.com/" img={Pinelog} />
   <a href='' title="Shooting Note App" link="" img={Shooter} />
   */}
   
  </div>
    </section>
 
    
  )
}

export default Projects