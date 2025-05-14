import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // or use <a href> if not using React Router

const projects = [
  {
    title: "MGBOO – UK Fashion Store",
    description: "Modern fashion e-commerce platform with seamless UX.",
    link: "https://mgboo.co.uk"
  },
  {
    title: "MFS Beds – Luxury Bedding",
    description: "High-end bedding website with custom integrations.",
    link: "https://mfsbeds.co.uk"
  },
  {
    title: "Broad Events",
    description: "Event management platform with lead capture tools.",
    link: "https://broadevents.co.uk"
  },
  {
    title: "EventPoint UK",
    description: "UK-based ticketing and event platform with dashboard.",
    link: "https://eventpointuk.com"
  },
  {
    title: "Event Unique",
    description: "Custom event planning platform with online quote system.",
    link: "https://eventunique.co.uk"
  },
  {
    title: "Tixtfy – Ticketing Platform",
    description: "Online event ticketing system with booking automation.",
    link: "https://tixtfy.com"
  },
  {
    title: "Keen to Cleaning",
    description: "Cleaning service site with online booking and CRM.",
    link: "https://keentocleaning.com"
  },
  {
    title: "Integra Solar Pakistan",
    description: "Clean energy website for the Pakistani market.",
    link: "https://integrasolar.com.pk"
  },
  {
    title: "Integra Solar Australia",
    description: "Corporate solar solutions site for AU audience.",
    link: "https://integrasolar.com.au"
  },
  {
    title: "Proson Solar AU",
    description: "Solar product brand site with catalog display.",
    link: "https://prosonsolar.com.au"
  },
  {
    title: "FreshWipe AU",
    description: "Eco-friendly hygiene brand with direct-to-consumer store.",
    link: "https://freshwipe.com.au"
  },
  {
    title: "Sneaker Junky UK",
    description: "UK-based streetwear e-commerce with sleek design.",
    link: "https://sneakerjunky.co.uk"
  },
  {
    title: "Tickago – Travel Tickets",
    description: "Advanced travel ticketing website with dashboard.",
    link: "https://tickago.com"
  }
];

export default function Portfolio() {
  const visibleProjects = projects.slice(0, 6); // Show only first 6

  return (
    <section className="bg-[#0D0F1C] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Portfolio
        </motion.h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          A selection of our most impactful, elegant, and professionally-crafted digital solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group bg-gradient-to-br from-[#1A1D2E] to-[#11131F] rounded-3xl p-8 min-h-[280px] flex flex-col justify-between border border-gray-800 hover:border-indigo-500 hover:shadow-[0_0_15px_#6366f1aa] transition duration-300"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-indigo-300 group-hover:text-white transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        <div className="ml-230">
          <Link
            to="/portfolio" // if using React Router
            // or use <a href="/portfolio"> if you're not
           className="inline-block bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
