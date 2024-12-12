import { motion } from "framer-motion";
import profile from "../assets/images/profile-image.jpg";

export default function About() {
  const hobbies = [
    {
      title: "Photography",
      description: "Capturing moments and playing with light and shadows.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Photography Image
    },
    {
      title: "Gaming",
      description: "Immersive experiences in fantasy worlds and strategy games.",
      img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Gaming Image
    },
    {
      title: "Traveling",
      description: "Exploring new places and experiencing diverse cultures.",
      img: "https://images.unsplash.com/photo-1521747116042-5a810fda9664", // Traveling Image
    },
    {
      title: "Reading",
      description: "Delving into mystery novels and tech blogs.",
      img: "https://images.unsplash.com/photo-1705721357357-ab87523248f7?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Reading Image
    },
  ];

  const skills = [
    "Problem Solving",
    "Team Collaboration",
    "Critical Thinking",
    "Creativity",
    "Technical Writing",
  ];

  return (
    <div id="about" className="min-h-screen bg-gray-900 text-white px-20 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Profile Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.img
          src={profile} // Replace with your profile image URL
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover shadow-lg mb-6 md:mb-0 md:mr-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div>
          <p className="text-xl text-gray-400">
            Hi, I'm Vineeth Nair, a passionate MERN stack developer specializing in React. 
            I enjoy crafting user-friendly, dynamic web applications and learning about 
            the latest technologies. When I’m not coding, I spend my time exploring new hobbies 
            and enhancing my creative skills.
          </p>
        </div>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Hobbies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <img
                src={hobby.img}
                alt={hobby.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold">{hobby.title}</h4>
                <p className="text-gray-400 mt-2">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills & Interests Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Skills & Interests</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
