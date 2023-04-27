import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'


const Project = ({title,link,img,alt}) => {
  const [ rotate, setRotate ] = useState(false)
  return (

 
   
   <div className="projects">
    <motion.div 
  animate={{rotate: rotate ? 360 : 0 }}
    onHoverStart ={() => {setRotate(!rotate);
    }}
      >
   
      <h4>{title}</h4>
      <br />    
      <a href={link} target="_blank" rel="noreferrer"><img src={img} alt={alt} /></a>
      </motion.div>
    </div>
    
   

  

    
  )
}

export default Project