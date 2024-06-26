import React from 'react'
import './about.css'
import {MdMilitaryTech} from 'react-icons/md'
import {VscCode} from 'react-icons/vsc'
import Awards from '../../assets/Awards.png'
import GitHubCalendar from 'react-github-calendar';

const about = () => {
  return (
    <section id='about'>
    <h2>About Me</h2>
    <div className="about__container container">

      <div className='about'>
        <h2> <VscCode/> How I got into coding <VscCode/> </h2>
        <h4>  Was simply just curiosity that grew and grew. I stumbled through trying to learn own my own and creating my own websites through a CMS. 
          I then attended a Full Stack Development bootcamp at Bottega University where I graduated and now wanting to move into a degree program. 
          As I'm moving through my journey I'm also starting to become intrested in the ethical hacking community, and pen testing. I love listening to 
          to Darknet Diaries by Jack Rhysider. During my off time I'm a woodworker as well and enjoy building mostly furniture.
          Wood working lets me approach problem solving on a whole different level. I'd say my skills are pointed heavier on the front-end web development side of full stack. </h4>
      </div>

      <div className='veteran' >
        <h2><MdMilitaryTech/>U.S. Military / DOD<MdMilitaryTech/></h2>
        <h4> Veteran with 12+ years of Honorable Service serving on or as Active Duty, National Guard, and a civilian contractor.</h4>
        <img src={Awards} className='awards' alt="about-img"/>
        

      </div>
      <label htmlFor="">GITHUB</label>
      <GitHubCalendar username="usmc1371nerd" />
      
    </div>
    </section>
  )
}

export default about