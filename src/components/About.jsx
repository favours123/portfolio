import React from 'react';
import { BiCodeBlock, BiLogoAndroid, BiLogoMongodb, } from 'react-icons/bi';
import { FaPencilRuler } from 'react-icons/fa'
const About = () => {
  const skills = [
    { name: "Ui & UX DESIGNING ", icon: <FaPencilRuler /> },
    { name: "MOBILE DEVELOPMENT ", icon: <BiLogoAndroid /> },
    { name: "WEB DEVELOPMENT ", icon: <BiCodeBlock /> },
    { name: "DATABASE MANAGEMENT WITH MONGODB ", icon: <BiLogoMongodb /> }
  ]
  return (
    <div className='px-7 md:px-10 sm:-mt-24 py-10 dark:bg-opacity-40 dark:bg-slate ' id='about'>
      <h1 className='text-3xl pt-4 lg:pt-0 my-5 text-white dark:text-slate '>About <span className='text-primary'>Me</span></h1>
      <p className='text-white my-2 md:w-2/3 leading-[2] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dicta quidem vero, et minus quae dolorem! Explicabo, quos asperiores dolore laudantium alias at. Asperiores necessitatibus pariatur error saepe sequi perferendis!</p>


      {/* experience section */}
      <div className='md:flex items-center my-2'>
        <p className='text-8xl font-bold text-primary'>4+</p>
        <p className='text-white font-semibold text-2xl md:ml-5 '>Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users</p>
      </div>

      {/* SKILLS */}
      <div className='skill flex flex-col md:flex-row '>
        {
          skills.map((skill, index) => <div key={index} className='skills md:w-{256px} md:h-{254px} bg-[#a7a2a2] rounded hover:bg-primary flex flex-col items-baseline justify-end my-3 md:my-3 mx-3 px-2.5 py-5 shadow-sm transition-all duration-500 '>
            <span className='text-4xl bg-none '>{skill.icon}</span>
            <p className='text-xl mt-3 text-white font-semibold '>{skill.name}</p>
          </div>)
        }
      </div>
    </div>

  );
}

export default About;
