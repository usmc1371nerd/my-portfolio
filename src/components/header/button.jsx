import React from 'react'
import Resume from '../../assets/Resume 2023.docx'

const button = () => {
  return (
    <div>
        <a href={Resume} download className='btn'>Download Resume</a>
        
        <a href="#contact" className='btn-primary'>Lets Talk</a>
      
    
    </div>
  )
}

export default button