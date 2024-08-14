import React from 'react';

function Contact() {
  // Function to open Gmail
  const openGmail = () => {
    window.open('mailto:bryanjoshuabucu02@gmail.com', '_blank');
  };

  return (
    <div id='contact' className="flex flex-col items-center justify-center p-8 bg-[#122247] text-white min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
        <h1 className="text-lg bebas-neue-regular mb-2 text-aqua">What’s Next?</h1>
        <h2 className="text-6xl font-semibold  mb-2">Get In Touch</h2>
        <p className="text-lg mb-8 text-justify max-w-3xl">
            I'm currently exploring new opportunities and would love to connect. Whether you have a question, 
          want to discuss a potential collaboration, or just want to say hi, feel free to reach out. 
          I'll do my best to get back to you!
        </p>
        <button
          onClick={openGmail}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#122247] rounded-md group-hover:bg-opacity-0">
            Message Me
          </span>
        </button>
      </div>
    </div>
  );
}

export default Contact;
