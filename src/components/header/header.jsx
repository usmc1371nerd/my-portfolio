import React from 'react'
import './header.css'
import Button from './button'
import HeaderSocials from './HeaderSocials'





const header = () => {
  return (
    <header>
      <div className="container header__container" id='home'>
        <h5>Welcome to my portfolio website</h5>
        <h1>James Dumas</h1>
        <h5 className='text-bright'>Full Stack Developer / Teaching Assistant </h5>
        <h6 className='text-bright'>Bottega University</h6>

        <h5 className='text-bright'>Associate Developer (Contractor) </h5>
        <h6 className='text-bright'>NiBuild</h6>
       
        <Button></Button>

     
      <a href='#contact'className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
    
       

      
      </div>
    </header>
  )
}

export default header