// src/Display.js
import React from 'react';
import Projects from '../Components/projects'; // Adjust the path as needed
import dpoLogin from '../assets/project-images/dpo-login.png';
import dental from '../assets/project-images/dental.png';

function Display() {
  const projects = [
    {
      title: 'DPO Web Services',
      description: 'DPO Web Services is a web application used for managing student files. This is my project during my Internship with Saint Louis University - Data Protection Office.',
      image: dpoLogin,
      link: 'https://bucuthecoder.github.io/dpodiscuss/', // React Router path
    },
    {
      title: 'Web-Based Appointment and Patient Record Management System for Cruz Dental Clinic',
      description: 'A Web-Based Appointment and Patient Record Management System for Cruz Dental Clinic. This is our Capstone Project for Dra. Marites Cruz',
      image: dental,
      link: 'https://bucuthecoder.github.io/cruzdentalclinic-discussion/', // React Router path
    },
  ];

  return (
    <>
      <h1
        id='works'
        className='text-white text-lg montserrat px-9' // Added padding on the x-axis
      >
        MY WORKS
      </h1>
      <h1
        id='projects'
        className='text-white text-7xl basement-groteque px-9 mt-2' // Added padding and margin-top
      >
        Projects
      </h1>
      <div className="p-8"> </div>
      <Projects projects={projects} />
    </>
  );
}

export default Display;
