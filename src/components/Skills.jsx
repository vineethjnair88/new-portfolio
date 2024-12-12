import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaBootstrap, FaNodeJs, FaHtml5,FaAws } from 'react-icons/fa';
import { SiRedux, SiMongodb,SiMaterialformkdocs } from 'react-icons/si';

export default function Skills() {
    
  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl" />, description: 'A JavaScript library for building user interfaces.' },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl" />, description: 'Style your web pages with CSS.' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl" />, description: 'A framework for responsive web development.' },
    { name: 'Redux', icon: <SiRedux className="text-4xl" />, description: 'State management for React applications.' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl" />, description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl" />, description: 'A NoSQL database for modern applications.' },
    { name: 'Material UI', icon: <SiMaterialformkdocs className="text-4xl" />, description: 'React components that implement Google\'s Material Design.' },
    { name: 'HTML', icon: <FaHtml5 className="text-4xl" />, description: 'The standard markup language for documents designed to be displayed in a web browser.' },
    { name: 'AWS', icon: <FaAws className="text-4xl" />, description: 'Amazon Web Services - Cloud computing services.' },
  ];

  return (
    <div id="skills" className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        
        >
          My Skills
        </motion.h2>

        {/* Skills Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
         <motion.div
         key={index}
         className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg border-4 border-transparent hover:border-blue-500 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         whileHover={{ scale: 1.2 }}
       >
              <div className="text-blue-500 mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
