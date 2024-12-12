import { useState } from 'react';
import { motion } from 'framer-motion';
import resume from "../assets/images/Vineeth-Nair.pdf"

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      title: 'Junior Software Developer',
      company: 'Softnotions Technologies Pvt Ltd',
      duration: 'Nov 2022 - Oct 2024',
      description: 'Developing scalable web applications using the MERN stack, building robust REST APIs, and collaborating with cross-functional teams.',
      details: {
        technical: 'Built full-stack applications using React, Node.js, MongoDB, and Express. Developed RESTful APIs and integrated third-party services.',
        projectManagement: 'Worked with a cross-functional team to deliver features on time. Managed timelines, tasks, and priorities using Jira.',
        others: 'Collaborated with UX/UI designers to ensure the best user experience.'
      }
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Trinity Technologies',
      duration: 'Mar 2021 - Nov 2021',
      description: 'Worked on various front-end projects using Javascript and PHP to create responsive and interactive user interfaces.',
      details: {
        technical: 'Built responsive web applications using Javascript,JQuery,Ajax and PHP. Optimized page load time and improved accessibility.',
        projectManagement: 'Collaborated with the design team to implement user-friendly designs.',
        others: 'Participated in code reviews to ensure quality code.'
      }
    },
    // {
    //   title: 'Intern - Software Engineer',
    //   company: 'Innovatech',
    //   duration: 'May 2020 - Aug 2020',
    //   description: 'Assisted in developing web applications, learned about modern front-end frameworks, and worked on optimizing code for performance improvements.',
    //   details: {
    //     technical: 'Assisted in developing front-end components using React. Improved performance by optimizing React rendering.',
    //     projectManagement: 'Worked under the supervision of senior engineers to complete tasks on time.',
    //     others: 'Gained hands-on experience with Agile methodologies and version control using Git.'
    //   }
    // }
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div id="experience" className="bg-gray-900 text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Professional Experience
        </motion.h2>

        {/* Flex Container for Left and Right Sections */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Experience Timeline */}
          <div className="flex-1 md:mr-1">
            {/* Timeline Section */}
            <div className="relative">
              {/* <div className="border-l-4 border-gray-500 absolute left-1/2 transform -translate-x-1/2 h-full"></div> */}

              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="mb-12 flex justify-start items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 1 }}
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-8 items-start md:items-center w-full">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-96">
                      <h3 className="text-2xl font-semibold">{experience.title}</h3>
                      <h4 className="text-xl text-blue-400 mb-2">{experience.company}</h4>
                      <p className="text-gray-400 mb-4">{experience.duration}</p>
                      <p className="text-gray-300">{experience.description}</p>
                      <button
                        className="text-blue-600 hover:text-blue-400 mt-4"
                        onClick={() => openModal(experience)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section - Collaboration Card */}
          <div className="flex-1 md:w-1/3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Interested in Collaborating?</h4>
              <p className="text-gray-400 mb-4">Feel free to get in touch or download my resume to know more about my work.</p>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300 block mb-4 text-center"
              >
                Contact Me
              </a>
              <a
                href={resume}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700 transition duration-300 block text-center"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 rounded-lg p-8 w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside the modal
          >
            <h3 className="text-2xl font-semibold mb-4">{selectedExperience?.title}</h3>
            <h4 className="text-xl text-blue-400 mb-2">{selectedExperience?.company}</h4>
            <p className="text-gray-400 mb-4">{selectedExperience?.duration}</p>

            {/* Categories */}
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-semibold text-blue-400">Technical</h5>
                <p className="text-gray-300">{selectedExperience?.details.technical}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-blue-400">Project Management</h5>
                <p className="text-gray-300">{selectedExperience?.details.projectManagement}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-blue-400">Others</h5>
                <p className="text-gray-300">{selectedExperience?.details.others}</p>
              </div>
            </div>

            <button
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
