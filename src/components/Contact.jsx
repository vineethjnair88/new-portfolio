import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
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
    <div id="contact" className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Side - Contact Form */}
        <motion.div
          className="w-full md:w-1/2 px-8 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none mb-4 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
              whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none mb-4 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
              whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none mb-4 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
              whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full p-3 bg-blue-600 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)" }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Address Section */}
        <motion.div
          className="w-full md:w-1/2 px-8 py-16 bg-gray-800 rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">My Address</h2>
          <p className="text-lg text-gray-400">
            Krishna Kripa, Peringammala, Trivandrum 695042
          </p>
          <p className="text-lg text-gray-400 mt-2">Kerala, India</p>
          <p className="text-lg text-gray-400 mt-2">Email: vineethjnair88@gmail.com</p>
          <p className="text-lg text-gray-400 mt-2">Phone: +91-701-293-1784</p>
        </motion.div>
      </div>
    </div>
  );
}
