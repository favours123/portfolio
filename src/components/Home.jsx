import React from 'react';
import picMe from '../assets/pic.png'
import { Link } from 'react-scroll';
import { formToJSON } from 'axios';
const Home = () => {
  return (
    <div className='px-7 py-20 md:px-10  md:h-screen h-full dark:bg-white bg-[#4486501a]' id="home" >
      <div>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
          {/* texts */}
          <div className='text-white dark:text-slate '>
            <p className=' mt-12 text-3xl  '>Hello, I'm</p>
            <p className='text-3xl font-semibold md:text-5xl my-4'>Favours Excellence</p>
            <p className='md:w-96'>I am a <span className='font-semibold text-2xl text-primary dark:text-[#233e2e] '>Front-End Web Developer</span> That Loves To Create Dynamic And Explosive Ui Designs.</p>
            {/* info buttons */}
            <div className='mt-5 mb-7 mx-auto block'>
              <Link 
              to='projects'
              activeClass='active'
              smooth={true}
              spy={true}>
              <button className='btn bg-primary dark:bg-slate py-1.5 px-6 text-lg mr-5 ml-2 mb-4 text-white rounded hover:bg-white dark:hover:bg-white hover:text-primary dark:hover:text-slate transition-all font-bold duration-500 '>Projects</button>
              </Link>
              <button className=' border-[3px] border-solid font-bold border-primary dark:border-slate hover:border-white dark:hover:border-white px-6 py-1.5 rounded  text-white dark:text-slate '>Hire me
              </button>
            </div>
          </div>
          {/* picture me */}
          <div className='order-first my-5 mx-5 px-5 w-[50%] py-5 md:order-last relative md:rounded-s-full  bg-primary dark:bg-slate rounded-t-full '>
            <img className='w-[60%] mx-[20%] md:mx-[0%] rounded-[50%] h-[60%]' src={picMe} alt="" />
          </div>
        </div>
      </div>

      {/* divider */}
      <div className='dark:bg-opacity-70 w-full h-32  bg-[#041503] mx-auto absolute left-0 hidden md:block xl:hidden'>
      </div>

    </div>

  );
}

export default Home;
