import React from "react";

const experiences = [
  {
    date: "Nov 2022 - Nov-2024",
    role: " Software Developer",
    company: "Softnotions Technologies Pvt Ltd",
    description:
      "Developed front-end applications using React and back-end services with Node.js, following the MVC design pattern for scalability and maintainability.Managed global state effectively using Redux and Zustand and created custom hooks for API calls.Collaborated with the team using GitHub, managing pull requests and ensuring smooth code integration.",
    skills: ["React.js", "Next.js", "Redux.js", "Tailwind", "Firebase"],
    iconBg: "bg-blue-500", // Icon background color
  },
  {
    date: "Jan 2021 - Sep 2022",
    role: "Frontend Developer",
    company: "Upwork (Freelance)",
    description:
      "Developed custom websites using HTML, CSS, JavaScript, React, and Node.js. Collaborated with clients to ensure project goals were met on time and within budget, translating their requirements into functional web solutions. Providing post-project maintenance and support.",
    skills: ["React.js", "React Native", "Bootstrap", "VanillaJS"],
    iconBg: "bg-blue-500",
  },
  {
    date: "Jan 2020 - Nov 2020",
    role: "PHP Developer Intern",
    company: "Trinity Technologies",
    description:
      "Design and develop UI components . Integration of user-facing elements developed by front- end developers with server-side logic.Design and implement user interface components for JavaScript-based web and mobile applications using latest technologies.",
    skills: ["React.js", "React Native", "Bootstrap"],
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
          darkMode ? "border-blue-400" : "border-white"
        } mx-auto max-w-4xl`}
      >
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-6">
            {/* Icon */}
            <div
              className={`absolute -left-5 top-0 w-10 h-10 ${
                darkMode ? "bg-blue-400" : "bg-white"
              } rounded-full flex items-center justify-center`}
            >
              <span className="text-xl">{darkMode ? "💻" : "💻"}</span>
            </div>
            {/* Details */}
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-sm mb-2`}
            >
              {exp.date}
            </p>
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="mb-4">{exp.company}</p>
            <p className="mb-4">{exp.description}</p>
            {/* Skills */}
            <div className="flex flex-wrap gap-2">
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
