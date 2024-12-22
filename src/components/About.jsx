import React from 'react'
import profilePic from "../assets/images/profile-image.jpg"
const About = () => {
  return (
   <div>
     <section
    id="about"
    className="min-h-screen flex flex-col md:flex-row items-center lg:px-24 md:px-12"
  >
    {/* Left Column - About Me Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Hello! I'm Vineeth Jay
      </h2>
      <p className="leading-relaxed mb-4">
        Passionate full-stack web developer with
        expertise in JavaScript, React, and Node.js. I specialize in
        building user-friendly web applications with a focus on
        performance and clean design.
      </p>
      <p className="leading-relaxed">
        With 2+ years of experience in the tech industry, I have worked
        with a diverse range of clients, turning ideas into functional,
        scalable, and visually appealing digital solutions. When I’m not
        coding, you can find me exploring new tech trends, mentoring
        aspiring developers, or capturing the world through my camera
        lens.
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