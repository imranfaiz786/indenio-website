import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Star, Eye, Rocket, Globe, ShieldCheck, MapPin } from "lucide-react";

export default function About() {
  const sections = [
    {
      icon: Users,
      title: "Who We Are",
      text: "INDENIO is a dynamic team of tech experts, innovators, and digital problem solvers committed to revolutionizing the future through AI and full-stack development."
    },
    {
      icon: Target,
      title: "Our Mission",
      text: "To drive digital transformation by crafting intelligent, reliable, and scalable technology solutions tailored to our clients’ needs."
    },
    {
      icon: Rocket,
      title: "What We Do",
      text: "We deliver cutting-edge software, mobile apps, AI tools, and cloud-based systems that redefine performance and user experience."
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "To become a global leader in tech innovation, empowering businesses and startups to lead with future-ready digital solutions."
    },
    {
      icon: ShieldCheck,
      title: "Why Choose Indenio",
      text: "Client-focused, innovation-driven, and committed to quality — we blend creativity with functionality for unmatched results."
    },
    {
      icon: Star,
      title: "Our Values",
      text: "Integrity, innovation, collaboration, and excellence are the core values driving our culture and every project we build."
    },
    {
      icon: Globe,
      title: "How We Work",
      text: "Agile methodology, transparent communication, and a user-centered approach define how we build and scale digital products."
    },
    {
      icon: MapPin,
      title: "Location",
      text: "We are proudly located in Abu Dhabi Tower, F-11 Islamabad, serving global clients with local expertise."
    }
  ];

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="container mx-auto px-4 text-center mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About INDENIO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Discover who we are, what we believe in, and how we're reshaping the digital future through impactful technology.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-2xl"
            >
              <section.icon className="h-10 w-10 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-400 text-sm">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
