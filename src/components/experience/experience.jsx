import React from 'react'
import './experience.css'
import Bottega from '../../assets/Bottega.png'
import {SiHtml5} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiPython} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiFlask} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {TbSql} from 'react-icons/tb'




const experience = () => {
  return (
    <section id='education'> 
    <h2>Education</h2>
  
    <div className="education">
    
    <h3 className='title'> Full Stack Development Certificate </h3>
    <h4 className='title-education'>Technologies studied:
    <div className="list">
    <ul>HTML <SiHtml5/> </ul>
    <ul>CSS <DiCss3/></ul>
    <ul>JavaScript<TbBrandJavascript/> </ul>
    <ul>Python <SiPython/></ul>
    <ul>React <FaReact/></ul>
    <ul>Flask <SiFlask/></ul>
    <ul>MongoDB <SiMongodb/></ul>
    <ul>SQL Databases <TbSql/></ul>
    </div>
    </h4>
    <img src={Bottega} className='bottega' alt="education-img"/>
        
    </div>
  
    
    
    </section>
  )
}

export default experience