import React from "react";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Smartphone,
  ShoppingCart,
  Code2,
  LayoutDashboard,
  BarChart4,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    icon: <MonitorSmartphone className="h-10 w-10 text-indigo-400" />,
    description: "Modern and scalable websites tailored for your business needs."
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-10 w-10 text-green-400" />,
    description: "Cross-platform mobile apps for iOS and Android."
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="h-10 w-10 text-pink-400" />,
    description: "Secure and high-performing online store development."
  },
  {
    title: "Custom Software Development",
    icon: <Code2 className="h-10 w-10 text-blue-400" />,
    description: "Tailored software to solve your unique business challenges."
  },
  {
    title: "UI/UX Design & Branding",
    icon: <LayoutDashboard className="h-10 w-10 text-yellow-400" />,
    description: "Intuitive design and branding to make your product shine."
  },
  {
    title: "SEO & Digital Marketing",
    icon: <BarChart4 className="h-10 w-10 text-rose-400" />,
    description: "Boost your visibility with SEO and smart marketing strategies."
  },
  {
    title: "Social Media Management",
    icon: <Users className="h-10 w-10 text-cyan-400" />,
    description: "Grow your audience and engagement across social platforms."
  }
];

export default function Services() {
  const displayedServices = services.slice(0, 6); // Show only first 6 services

  return (
    <section className="bg-[#0B0B20] text-white py-20 min-h-screen">
      <div className="container mx-auto px-4 mt-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Looking for a reliable tech partner?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto text-center leading-relaxed mb-12"
        >
          We’re a full-service software house offering:
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-[#13132B] hover:bg-[#1D1D3A] p-8 rounded-2xl shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="text-center">
                <button className="mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 cursor-pointer">
                  View Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="ml-200">
          <Link
            to="/services"
            className="inline-block bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            See More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
