// src/ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = ({ page }) => {
  // Use `page` prop to dynamically set the content source
  return (
    <div>
      <iframe
        src={page}
        title="Project Details"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default ProjectPage;