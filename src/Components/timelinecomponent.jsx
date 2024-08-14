// src/App.js
import React from 'react';
import Timeline from '../TimeLine';

function CustomTimeLine() {
  const jobs = [
    {
      title: 'Work Immersion - Apprentice',
      company: 'Philippines Long Distance Company',
      dateRange: 'Mar 2018 - April 2018',
      description: 'Provided friendly and effective customer service by assisting with inquiries and resolving complaints, working closely with technicians. Gained hands-on experience with fiber optics to enhance support and address customer concerns efficiently.',
    },
    {
      title: 'Internship - Developer',
      company: 'Saint Louis University - Data Protection Office',
      dateRange: 'Feb 2023 - June 2023',
      description: 'Developed web services and designed user interfaces for the Data Protection Office, using FIGMA to create prototypes and implementing them with HTML, CSS, and Bootstrap for responsive design. Built and organized database relationships and created back-end functionality with SQL, JavaScript, and PHP to support data storage and processing needs.',
    },
    {
      title: 'Machine Operator',
      company: 'Spector & Co',
      dateRange: 'Aug 2022 - March 2023',
      description: 'Operated various machines to efficiently fulfill customer orders while conducting quality checks on cover designs to ensure accuracy and adherence to specifications. Collaborated with team members to maintain a smooth workflow and timely delivery, adapting to different products and addressing any issues with attention to detail.',
    },

    {
      title: 'SMT - Machine Operator',
      company: 'Dormakaba',
      dateRange: 'September 2023 - Present',
      description: 'Set up and calibrated SMT machines for precise component placement on PCBs, ensuring accurate alignment and high quality. Conducted inspections and quality checks, diagnosed and resolved machine issues, and maintained detailed production records.',
    },
    // Add more jobs as needed
  ];

  return (
   <>
        <h1 id='exp' className='text-white text-3xl'>Work Experience</h1>
        <Timeline jobs={jobs} />
    
  </>
  );
}

export default CustomTimeLine;
