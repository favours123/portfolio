import React from 'react';
import { Link } from 'react-router-dom';
import slides from '../slider'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Projects = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1

    }
  };

  return (
    <div className='dark:bg-slate py-4 dark:bg-opacity-60 '>
      <div className='px-7 md:px-10 my-8' id='projects' >
        <h1 className='text-primary text-3xl mt-14'>Featured projects : </h1>
        <p className='text-white my-2 md:w-2/3 leading-[2] '>I have worked on many projects over the course of being a Web 3 Developer, here are few of my projects</p>
      </div>
      {/* Featured projects */}
      <Carousel keyBoardControl={true} responsive={responsive} showDots={true} >
      {
        slides.map((slide, index) => <div className='flex flex-col items-center bg-white bg-opacity-5 py-10 px-5 mx-5 my-10 shadow-xl rounded-xl '>
          <a href={slide.photo}>
          <img  className='w-[250px] h-[160px] rounded-xl ' src={slide.photo} alt=""  />
          </a>
          <h1 className='text-2xl text-[#b19898] my-2 font-semibold'> {slide.title}</h1>
          <p className='text-[#b19898] w-2/3  my-2 text-center '>{slide.description}</p>
        </div>
          )
      }
        </Carousel>

    </div>
  );
}

export default Projects 

