import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ya36ctq", // Replace with your EmailJS Service ID
        "template_48nfzel", // Replace with your EmailJS Template ID
        e.target,
        "v7B-48SOWSp93nFfu" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message.");
        }
      );

    // Reset the form
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className={`flex items-center justify-center min-h-screen `}
    >
      <div className="w-full max-w-lg px-8 py-16">
        {/* Contact Form */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={`text-4xl font-bold text-center mb-8 `}>
            #CONTACT
          </h2>
          <form onSubmit={sendEmail} className="space-y-6 w-full">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`w-full p-3 rounded-md focus:outline-none mb-4 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
              } focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50`}
              // whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`w-full p-3 rounded-md focus:outline-none mb-4 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
              } focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50`}
              // whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className={`w-full p-3 rounded-md focus:outline-none mb-4 ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
              } focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50`}
              // whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className={`w-full p-3 rounded-md text-lg font-semibold transition duration-300 ${
                darkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-[#B8001F] text-white"
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links Section */}
        <motion.div className="flex justify-center space-x-6 mt-8 text-2xl">
          <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer">
            <FaGithub  />
          </a>
          <a href="https://www.linkedin.com/in/vineeth-jay/" target="_blank" rel="noreferrer">
            <FaLinkedin  />
          </a>
          <a href="https://www.instagram.com/vineeth__jay/" target="_blank" rel="noreferrer">
            <FaInstagram  />
          </a>
          <a href="https://api.whatsapp.com/send?phone=917012931784" target="_blank" rel="noreferrer">
            <FaWhatsapp  />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
