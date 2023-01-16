import React from 'react'
import "./skill.css";
import Backend from  "./Backend";
import Frontend from './Frontend';
const Skill = () => {
  return (
    <section className="skills section" id='Skills'>
        <h2 className='section__title'>
            Compétences
        </h2>
       
        <div className="skills__container container grid">
               
                <Frontend/>
                <Backend/>
        </div>
    </section>
  )
}

export default Skill
