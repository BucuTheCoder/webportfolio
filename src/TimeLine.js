// src/Timeline.js
import React from 'react';
import './Styles/timeline.css';

const TimelineItem = ({ job }) => {
  return (
    <div className={`timeline-item ${job.alternate ? 'right' : 'left'}`}>
      <div className="content">
        <h1 className='text-xl montserrat md:font-bold' >{job.title}</h1>
        <p className='text-aqua montserrat'>{job.company}</p>
        <p>{job.dateRange}</p>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

const Timeline = ({ jobs }) => {
  return (
    <section className="timeline">
      {jobs.map((job, index) => (
        <TimelineItem key={index} job={{ ...job, alternate: index % 2 !== 0 }} />
      ))}
    </section>
  );
};

export default Timeline;
