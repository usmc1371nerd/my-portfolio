import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

 
const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/james-dumas/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://twitter.com/usmc_nerd" target="_blank" rel='noreferrer'><BsTwitter/></a>
        <a href="https://github.com/usmc1371nerd" target="_blank" rel='noreferrer'><BsGithub/></a>
        
        
        </div>
  )
}

export default headerSocials