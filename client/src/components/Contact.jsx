import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setFormData({ name: "", email: "", package: "", message: "" });
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <section className="bg-[#0A0A23] text-white py-20 ml-30">
      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 mr-30"
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-0 space-y-10 md:space-y-0 gap-10">
          {/* Form on Left */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 bg-[#1F2937] p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Select a Service Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              >
                <option value="">-- Choose a Package --</option>
                <option value="basic">Basic Package – $299</option>
                <option value="standard">Standard Package – $599</option>
                <option value="premium">Premium Package – $999</option>
                <option value="custom">Custom Quote</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Type your message..."
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              ></textarea>
            </div>

            {success && <p className="text-green-400 mb-4">{success}</p>}
            {error && <p className="text-red-400 mb-4">{error}</p>}

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 rounded-md transition duration-300 w-full cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info on Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 pl-0 md:pl-12 space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Mail className="text-indigo-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-400 text-sm">contact@indenio.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-indigo-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-indigo-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Office</h4>
                <p className="text-gray-400 text-sm">
                  Abu Dhabi Tower, F-11, Islamabad
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
