import React from 'react'
import profilePic from "../assets/images/profile-image.jpg"
const About = () => {
  return (
   <div>
     <section
    id="about"
    className="min-h-screen flex lg:pt-1 flex-col md:flex-row items-center lg:px-24  md:px-12 pt-12"
  >
    {/* Left Column - About Me Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Hello! I'm Vineeth Jay
      </h2>
      <p className="leading-relaxed mb-4">
      I'm a full-stack web developer with 2+ years of experience building and optimizing web applications using JavaScript, React, and Node.js. 
      I'm passionate about delivering scalable solutions within Agile environments, with a strong focus on performance optimization and user experience. 
      I believe in continuous learning and enjoy sharing knowledge with others, sometimes even informally mentoring aspiring developers.
      </p>
      <p className="leading-relaxed">
      When I'm not coding or sharing knowledge, I enjoy exploring new tech and capturing moments through photography 📷.
      </p>
    </div>

    {/* Right Column - Placeholder Image */}
    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
  <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-lg flex items-center justify-center shadow-lg">
    <img
      src={profilePic} // Replace with your image path
      alt="Your Image"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

  </section>
   </div>

  )
}

export default About