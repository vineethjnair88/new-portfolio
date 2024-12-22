import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMaterialui, SiRedux, SiAntdesign } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function Skills({ darkMode }) {
  const skills = [
    { name: "React", icon: <FaReact />, color: "text-blue-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-700" },
    { name: "Ant Design", icon: <SiAntdesign />, color: "text-cyan-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-white" },
  ];

  return (
    <section id="skills" className=" lg:px-24  md:px-12">
      <h2 className="text-4xl font-bold text-center mb-8">#SKILLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
      {skills.map((skill, index) => (
  <div
    key={index}
    className={`flex flex-col items-center p-4 rounded-lg shadow-lg hover:scale-105 transition-transform ${
      darkMode
        ? "hover:border-blue-500 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]"
        : "hover:border-gray-600 hover:shadow-[0_0_15px_5px_rgba(169,169,169,0.7)]"
    } ${
      darkMode ? "bg-gray-800 border-gray-700" : "bg-[#D9EAFD] border-gray-900 text-gray-900"
    }`}
  >
    <div className={`text-3xl ${skill.color} mb-4`}>{skill.icon}</div>
    <h3 className=" font-medium  hover:text-blue-500">{skill.name}</h3>
  </div>
))}

</div>

    </section>
  );
}
