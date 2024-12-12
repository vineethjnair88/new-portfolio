import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
      {
        title: "Expense Tracker App",
        description: "A full-stack MERN application for managing personal expenses.",
        link: "#",
      },
      {
        title: "Healthcare Platform",
        description: "A Next.js application connecting patients with doctors.",
        link: "#",
      },
    ];

    return (
      <motion.div
        id="projects"
        className="bg-gray-900 text-white px-20 py-20 min-h-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 10px rgba(0, 255, 255, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
}
