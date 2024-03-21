import React from 'react';
import {BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoUpwork, BiSolidEnvelope} from 'react-icons/bi';
import Footer from './Footer';
const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
      <div className='flex flex-col md:flex-row'>
        {/* text and icons */}
        <div className='md:w-1/2'>
          <h1 className='text-3xl mt-16 text-primary font-semibold'>Connect with me :</h1>
          <p className='text-white my-2 md:w-2/3 leading-[2]'>Satisfied with me? Please kindly contact me</p>
           {/* social icons */}
           <div className='flex text-2xl font-extrabold my-5'>
            <BiLogoFacebookSquare className='text-primary'/>
            <BiLogoInstagramAlt className='text-2xl ml-3 text-primary'/>
            <BiLogoLinkedinSquare className='text-2xl ml-3 text-primary'/>
            <BiLogoUpwork className='text-2xl ml-3 text-primary'/>
            <BiSolidEnvelope className='text-2xl ml-3 text-primary'/>
           </div>
        </div>
        {/* form */}
        <div className='md:w-1/2'>
          <p className=' mt-16 text-white text-2xl mb-6'>Contact me, lets make magic together</p>
          <form action="">
            <input type="text" name="name" id="name" placeholder='name' className='outline-none text-white bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 my-6 w-full rounded' />
            <input type="text" name="email" id="email" placeholder='email' className='bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded text-white outline-none' />
            <textarea name="message" id="message" placeholder='Message' className='bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-4 outline-none text-white'></textarea>
            <button className='bg-primary py-2 px-6 font-semibold text-white rounded hover:bg-opacity-80 transition-all delay-500 block' type="submit">Send</button>
          </form>
        </div>
      </div>
        <Footer/>
           <div className='flex text-2xl font-extrabold my-5'>
            <BiLogoFacebookSquare className='text-primary'/>
            <BiLogoInstagramAlt className='text-2xl ml-3 text-primary'/>
            <BiLogoLinkedinSquare className='text-2xl ml-3 text-primary'/>
            <BiLogoUpwork className='text-2xl ml-3 text-primary'/>
            <BiSolidEnvelope className='text-2xl ml-3 text-primary'/>
           </div>
    </div>
  );
}

export default Contact;
