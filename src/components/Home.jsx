import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Typewriter } from 'react-simple-typewriter';
import { loadFull } from "tsparticles";
import styled from 'styled-components';

export default function Home() {

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
     

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center h-full">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 sm:px-16">
          {/* <motion.h1
            className=" md:text-5xl font-bold mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi,I'm Vineeth Nair
          </motion.h1> */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio!
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl italic text-gray-400 mb-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Turning ideas into reality, one line of code at a time.
          </motion.h2>

          <div className="text-lg md:text-xl text-blue-400 mb-6 text-center md:text-left">
            <Typewriter
              words={[
                "MERN Stack Developer 💻",
                "JavaScript Enthusiast 🚀",
                "Web Architect 🌐",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          {/* <motion.p
            className="text-gray-400 text-center md:text-left text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I'm a passionate MERN stack developer crafting stunning web experiences.
          </motion.p> */}
          <motion.a
  href="/about"
  className="relative inline-block text-lg font-semibold text-white px-6 py-3 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-4 focus:outline-none"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-30"></span>
  <span className="relative z-10">Learn More About Me</span>
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 blur-lg opacity-20"></div>
</motion.a>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 relative">
  {/* Floating Animated Shapes */}
  <motion.div
  className="w-32 h-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full opacity-100 neon-glow"
  animate={{
    scale: [1, 1.5, 1],
    rotate: [0, 360],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
<motion.div
  className="w-48 h-48 bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 rounded-full opacity-30 absolute right-30"
  animate={{
    scale: [1, 1.6, 1],
    rotate: [0, -360],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

</div>

      </div>
    </div>
  );
}
