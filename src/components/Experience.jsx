import React from "react";

const experiences = [
  {
    date: "Nov 2022 - Nov-2024",
    role: " Software Developer",
    company: "Softnotions Technologies Pvt Ltd",
    description:
      "I contributed to all stages of the development lifecycle, building and maintaining scalable web applications using React, Node.js, and MongoDB. My work included implementing secure REST APIs (JWT), robust state management (Redux, Zustand), and engaging 3D visuals (Three.js). Data security and GDPR compliance were ensured using AWS Secrets Manager. I also collaborated effectively in Agile teams, participated in client meetings, and mentored junior team members.",
    skills: ["React.js", "Node.js","MongoDB", "Redux.js", "Tailwind", "MaterialUI"],
    iconBg: "bg-blue-500", // Icon background color
  },
  {
    date: "Jan 2022 - Sep 2022",
    role: "Frontend Developer",
    company: "(Freelance)",
    description:
      "Developed custom websites using HTML, CSS, JavaScript, React, and Node.js. Collaborated with clients to ensure project goals were met on time and within budget, translating their requirements into functional web solutions. Providing post-project maintenance and support.",
    skills: ["React.js", "Node.js","MongoDB", "Bootstrap", "VanillaJS"],
    iconBg: "bg-blue-500",
  },
  {
    date: "Mar 2021 - Nov 2021",
    role: "PHP Developer Intern",
    company: "Trinity Technologies",
    description:
      "Using PHP, MySQL, AJAX, and jQuery, I contributed to the development and maintenance of web applications within a small-scale company. My work included dynamic data handling, query optimization for performance improvement, and SQL database design and management. I collaborated effectively with cross-functional teams (product, design, QA) in Agile environments to deliver high-quality software on schedule. I also designed and implemented a micro-frontend architecture using IFrames, addressing key challenges in performance optimization and UX consistency to create a responsive and intuitive user interface.",
    skills: ["PHP", "MySQL", "Bootstrap","AJAX","jQuery","JavaScript"],
    iconBg: "bg-blue-500",
  },
];

const Experience = ({ darkMode }) => {
  return (
    <div
      id="experience"
      className={`py-12 px-6 ${
        darkMode ? " text-gray-100" : "text-gray-800"
      }`}
    >
      <h2
        className={`text-4xl font-bold text-center mb-12 ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        #TIMELINE
      </h2>
      <div
        className={`relative border-l-4 ${
          darkMode ? "border-blue-400" : "border-[#B8001F]"
        } mx-auto max-w-4xl py-12`}
      >
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-6">
            {/* Icon */}
            <div
              className={`absolute -left-5 top-0 w-10 h-10 ${
                darkMode ? "bg-blue-400" : "bg-[#B8001F]"
              } rounded-full flex items-center justify-center`}
            >
              <span className="text-xl">{darkMode ? "💻" : "💻"}</span>
            </div>
            {/* Details */}
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-sm mb-2 `}
            >
             <span className="text-3xl">🧑‍💻 </span>{exp.date}
            </p>
            <h3 className="text-xl font-bold ">{exp.role}</h3>
            <p className="mb-4">{exp.company}</p>
            <p className="mb-4 text-sm">{exp.description}</p>
            {/* Skills */}
            <div className="flex flex-wrap gap-2 ">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 ${
                    darkMode ? "bg-blue-400 text-gray-900" : "bg-[#B8001F] text-white"
                  } rounded-full text-sm`}
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
