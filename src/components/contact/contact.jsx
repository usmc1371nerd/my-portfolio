import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFillCalendarFill} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'> 
    <h2 className='contact__title'>Contact Me</h2>
    
    <div className="contact__container">
      
    <div className="contact">
      <MdEmail/>
      <h4>Let's Chat</h4>

      <a href="mailto:james.p.dumas@gmail.com">Send a message</a>
    </div>
   
    
 

    <div className="calendar">
      <BsFillCalendarFill/>
    <h4>Check my Availability</h4>
    <a href="https://calendar.google.com/calendar/embed?src=a6ed9d947f5e807f9fef2455634fca85bebd6109f09fa8a058853be12ec50caa%40group.calendar.google.com&ctz=America%2FChicago" target="_blank" rel="noreferrer">Click here</a>

    </div>

    </div>
    
    
    
     </section>
  )
}

export default contact