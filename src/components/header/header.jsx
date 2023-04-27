import React from 'react'
import './header.css'
import Button from './button'
import HeaderSocials from './HeaderSocials'
import ME from'../../assets/about-me-img.PNG'




const header = () => {
  return (
    <header>
      <div className="container header__container" id='home'>
        <h5>Welcome to my portfolio website</h5>
        <h1>James Dumas</h1>
        <h5 className='text-bright'>Fullstack Developer / Teaching Assistant </h5>
        <h6 className='text-bright'>Bottega University</h6>
       
        <Button></Button>

     
        <img src={ME} className='me' alt="about-img"/>



    
        <a href='#contact'className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
    
       

      
      </div>
    </header>
  )
}

export default header