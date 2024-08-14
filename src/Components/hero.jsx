import { ReactTyped as Typed } from 'react-typed';
import '../Styles/componentstyles.css';
import Imagemel from '../icons/imageme-removebg.png';
import React, { useEffect, useRef, useState } from 'react';

function Hero(){
    return(
        <>
        <div className="flex items-center p-5">
        <div className="ml-5 flex-1 animate__animated animate__fadeIn animate__delay-1s">
          <h1 id="who" className="text-5xl basement-groteque text-gray-200 mb-4 animate__animated animate__fadeInUp">BRYAN BUCU</h1>
          <h1 id="typing" className="text-2xl text-gray-200 mb-4">
            <span className="name space-grotesk">
              <Typed
                strings={[
                  " A BSIT GRADUATE",
                  " A WEB DEVELOPER",
                  " A BACK-END DEV",
                  " A UI/UX DESIGNER",
                  " A SOFTWARE DEVELOPER",
                ]}
                typeSpeed={60}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p id="details" className="text-gray-200 text-lg poppins-regular animate__animated animate__fadeIn animate__delay-2s">
            Hi, I'm <span className="text-aqua ">Bryan Joshua Bucu</span>, a passionate and dedicated Bachelor of Science in Information Technology graduate from Saint Louis University of Baguio City, Philippines 🇵🇭.
            As an aspiring IT professional, I specialize in Java, Web Development, SQL, and Database Management. I thrive on learning new technologies and collaborating with teams to create innovative solutions.
            Dive in to explore my projects and skills. Let's connect and build something amazing together!
          </p>
        </div>
        <img src={Imagemel} alt="image1" className="w-[68vh] h-auto rounded-2xl animate__animated animate__fadeInRight animate__delay-1s" />
      </div>
        </>
    )
}
export default Hero;