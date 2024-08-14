import { ReactTyped as Typed } from 'react-typed';
import '../Styles/componentstyles.css';
import CustomTimeLine from './timelinecomponent';
import Imagemel from '../icons/imageme-removebg.png';
import Imageme from '../icons/coding.jpg';
import Skills from './skills';
import React, { useEffect, useRef, useState } from 'react';

function About() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Adjust this value if needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  

  return (
    <>

      
      <div className="p-8"> {/* Space before the next section */}
        {/* Add any content or styling you want here */}
      </div>
        
      <div
      ref={sectionRef}
      className={`flex items-start justify-start p-5 w-[95%] mx-auto ${isVisible ? 'animate-fade-in visible' : 'animate-fade-in'}`}
      >
      <img
        src={Imageme}
        id='imgcode'
        alt="image"
        className="rounded-xl mr-6 animate__animated animate__fadeInLeft animate__delay-1s"
        style={{ width: '450px', height: '500px' }} // Custom width and height
      />

      <div className="flex-1">
        <h2 id="about" className={`text-3xl text-white bebas-neue-regular  mb-4 ${isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : ''}`}>
          ABOUT <span>ME</span>
        </h2>
        <p id="text" className={`text-white poppins-extralight-italic ${isVisible ? 'animate__animated animate__fadeIn animate__delay-2s' : ''}`}>
          HI!!Aspiring Software Developer passionate about crafting web applications that are both functional and
          visually appealing. Eager to learn and grow, I'm always looking to explore innovative approaches and develop my skills.
          Feel free to reach out—I'm excited about new opportunities and challenges!
        </p>
      </div>
    </div>


      <div className="p-5">
        <CustomTimeLine />
        <Skills />
      </div>
    </>
  );
}

export default About;
