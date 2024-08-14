import React, { useEffect, useRef } from 'react';
import Imageme from '../PixelBg.jpg'; // Adjust the image path if needed
import reactIcon from '../icons/react.svg';
import javaIcon from '../icons/Java.svg';
import pyIcon from '../icons/python.svg';
import phpIcon from '../icons/php.svg';
import sqlIcon from '../icons/mysql.svg';
import bootIcon from '../icons/bootstrap-svgrepo-com.svg';
import gitIcon from '../icons/git.svg';
import figmaIcon from '../icons/figma.svg';
import htmlIcon from '../icons/html.svg';
import cssIcon from '../icons/css.svg';

function Skills() {
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => {
      iconRefs.current.forEach((icon) => {
        if (icon) observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <div className="relative w-full h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${Imageme})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative z-10 text-white p-5">
        <h5 className="text-lg mb-1 montserrat">MY SKILLS</h5>
        <h1 className="text-7xl mt-1 basement-groteque">Technologies</h1>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-5 gap-9">
          {[reactIcon, javaIcon, pyIcon, phpIcon, sqlIcon, bootIcon, gitIcon, figmaIcon, htmlIcon, cssIcon].map((icon, index) => (
            <div
              key={index}
              className="w-32 h-32 flex justify-center items-center opacity-0 transition-opacity duration-500"
              style={{ animationDelay: `${index * 0.1}s` }} // Stagger the delay
              ref={(el) => (iconRefs.current[index] = el)}
            >
              <img src={icon} alt={`technology icon ${index}`} className="w-28 h-28" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
