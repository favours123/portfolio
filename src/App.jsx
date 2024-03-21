import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Routes, } from 'react-router-dom'
import { BiArrowToTop, BiCaretUp, BiSolidMoon, BiSolidSun, } from "react-icons/bi"
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {

  let [darkMode, setDarkMode] = useState(false)
  return (

    <div className="App">

      {/* back to top */}
      <div className='fixed right-6 bottom-10 bg-slate opacity-20 p-2 w-fit rounded-[50%] min-[450px]:hidden ' >
        <Link
          to='header'
          activeClass='active'
          smooth={true}
          spy={true}>
          <BiArrowToTop className='w-9 h-9' />
        </Link>
      </div>

      <div className={darkMode ? 'dark' : ""}>

        <div className='max-w-7xl mx-auto'>


          {/* theme-icons */}
          <div onClick={() => setDarkMode(!darkMode)} className='theme w-7 h-7 right-[17%] md:right-[3%] top-7 cursor-pointer block text-white absolute  '>
            {
              darkMode ? <BiSolidMoon style={{ fontSize: '26px' }} /> : <BiSolidSun style={{ fontSize: '26px' }} />
            }
          </div>
          <Header />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </div>

      <Router>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}


        </Routes>
      </Router>
    </div>
  )
}

export default App; 
