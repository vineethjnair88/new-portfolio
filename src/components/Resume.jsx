import React from "react";
import { FaDownload } from "react-icons/fa";
import cv from "../assets/images/Vineeth-Nair.pdf"
import { useNavigate } from 'react-router-dom';
const Resume = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div>

<div className="fixed top-7 left-2 z-10">
      <button onClick={handleGoBack} className="">
       ⬅️
      </button>
    </div>

<div className="fixed top-4 right-4 z-10">
        <a
          href={cv} 
           target="_blank" 
          rel="noopener noreferrer"
          download="Vineeth_Jay_CV.pdf"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none flex items-center justify-center"
        >
          <FaDownload className="text-lg mr-2" />
          Download CV 
        </a>
      </div>
         <div
      className="min-h-screen bg-white mx-auto p-6 sm:p-8 md:p-10 lg:p-12"
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "1rem auto",
        maxWidth: "800px",
      }}
    >
      {/* Header Section */}
      <header className="border-b border-gray-300 pb-4 mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          VINEETH J NAIR
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl text-gray-600">
        [Software Developer] : MERN Stack  | R&D Innovator
        </p>
        <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-2">
          +91-701-293-1784 | vineethjnair88@gmail.com |{" "}
          <a
            href="https://www.linkedin.com/in/vineeth-jay"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
        Experienced full-stack web developer (2+ years) specializing in building and optimizing high-performance, scalable web applications.
         Proficient in modern JavaScript technologies (React, Node.js, etc.), database management, and Agile development practices.
         Committed to delivering high-quality solutions and fostering team growth through knowledge sharing.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="mb-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
            Jr Software Developer - Softnotions Technologies Pvt Ltd
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-500">
            Nov 2022 - Oct 2024
          </p>
          <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
          <li><strong>R&amp;D and Full-Stack Development:</strong> Contributed to R&amp;D, developing front-end (React) and back-end (Node.js) applications using MVC architecture.</li>
  <li><strong>Agile and Collaboration:</strong> Worked in Agile environments, collaborating on GitHub with pull requests and code integration.</li>
  <li><strong>State Management and APIs:</strong> Managed global state with Redux and Zustand, created custom API hooks, and developed secure REST APIs with JWT authentication.</li>
  <li><strong>Data and Security:</strong> Designed MongoDB schemas, used aggregation pipelines, and secured sensitive data with AWS Secrets Manager (GDPR compliant).</li>
  <li><strong>Client Interaction and Team Development:</strong> Attended client meetings and established micro-learning groups for continuous improvement.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
            PHP Developer Intern - Trinity Technologies
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-500">
            Mar 2021 - Nov 2021
          </p>
          <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
          <li><strong>Full-Stack Web Development (PHP/MySQL/AJAX/jQuery):</strong> Developed and maintained web applications, optimized queries for performance, and designed/managed SQL tables.</li>
  <li><strong>Agile Collaboration:</strong> Worked in Agile environments, collaborating with product managers, designers, and QA to deliver high-quality software on time.</li>
  <li><strong>Micro-Frontend Architecture &amp; UX:</strong> Implemented a micro-frontend architecture using IFrames and addressed performance and UX challenges to ensure a responsive and intuitive interface.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          SKILLS & TOOLS
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs sm:text-sm lg:text-base text-gray-600">
          <li>React.js</li>
          <li>Redux</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Three.js</li>
          <li>Git / GitHub</li>
          <li>Jira</li>
          <li>Agile Development</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          PROJECTS
        </h2>
        <div className="mb-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
            CareDom (Employee Management System)
          </h3>
          <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
          <li>Led full-stack development of CareDom, a healthcare management SaaS platform using the MERN stack.</li>
  <li>Developed backend APIs, managed databases, and implemented data initialization.</li>
  <li>Built a user-friendly frontend with routing, state management, and responsive design</li>
  {/* <li>Managed and maintained MongoDB databases, ensuring high performance, data integrity, and scalability for the system's data-intensive requirements.</li>
  <li>Created and integrated Seeders for common data, including care home names, departments, and roles, enabling consistent and standardized initialization across multiple care homes.</li>
  <li>Used React Router DOM for intuitive navigation and seamless transitions between pages.</li>
  <li>Implemented global state management using Redux, ensuring smooth data flow across the application.</li>
  <li>Ensured cross-browser compatibility and responsiveness for all user interfaces to cater to diverse user needs.</li> */}
          </ul>
        </div>
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
            iDesigner (Building Management System)
          </h3>
          <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">
          <li>Built a user-friendly model building application based on React Planner.</li>
  <li>Enabled seamless transition between 2D and 3D design using drag-and-drop.</li>
  <li>Managed application state with Immutable.js and Redux.</li>
  <li>Handled CI/CD and deployments using Jenkins and FileZilla FTP</li>
  {/* <li>Managed the CI/CD pipeline using Jenkins for repositories including Development, QA, and Staging.</li>
  <li>Handled FileZilla FTP for live production releases and database backups.</li> */}
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600">
          <li>Web Development Bootcamp (Udemy)</li>
          <li>React: The Complete Guide (Udemy)</li>
          <li>Server-Side Rendering (LinkedIn Learning)</li>
          <li>Web Accessibility for Developers (LinkedIn Learning)</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
          EDUCATION
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-2">
          <strong>Diploma in Product Design and Analysis</strong>, CADD Center,
          2017 - 2018
        </p>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600">
          <strong>Bachelor’s in Mechanical Engineering</strong>, Kerala
          University, 2012 - 2016
        </p>
        
      </section>
    </div>
    </div>
   
  );
};

export default Resume;
