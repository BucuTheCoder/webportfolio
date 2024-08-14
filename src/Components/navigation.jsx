import React from 'react';
import { Link } from 'react-scroll';
import '../Styles/navbar.css'; // Adjust the path as needed

function Nav() {
  const openPDF = () => {
    window.open('/BRYANRESUME.pdf', '_blank'); // Adjust the path to your PDF file
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-[#122247] text-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold ebas-neue-regular">BRYN</h1>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-aqua cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="hover:text-aqua cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-aqua cursor-pointer"
        >
          Contact
        </Link>
        <button
          onClick={openPDF}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
          style={{ backgroundColor: '#122247' }}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#122247] rounded-md group-hover:bg-opacity-0">
            Resume/CV
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
