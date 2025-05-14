import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {
  MonitorSmartphone,
  Smartphone,
  ShoppingCart,
  Code2,
  LayoutDashboard,
  BarChart4,
  Users
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <MonitorSmartphone className="h-10 w-10 text-indigo-400" />,
    description: "Modern and scalable websites tailored for your business needs.",
    packages: [
      { name: "Basic", price: "Starts at $500" },
      { name: "Standard", price: "Starts at $1200" },
      { name: "Premium", price: "Starts at $2500" }
    ]
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-10 w-10 text-green-400" />,
    description: "Cross-platform mobile apps for iOS and Android.",
    packages: [
      { name: "Basic", price: "Starts at $800" },
      { name: "Standard", price: "Starts at $1500" },
      { name: "Premium", price: "Starts at $3000" }
    ]
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="h-10 w-10 text-pink-400" />,
    description: "Secure and high-performing online store development.",
    packages: [
      { name: "Basic", price: "Starts at $600" },
      { name: "Standard", price: "Starts at $1300" },
      { name: "Premium", price: "Starts at $2800" }
    ]
  },
  {
    title: "Custom Software Development",
    icon: <Code2 className="h-10 w-10 text-blue-400" />,
    description: "Tailored software to solve your unique business challenges.",
    packages: [
      { name: "Quote-Based", price: "Custom Quote Upon Request" }
    ]
  },
  {
    title: "UI/UX Design & Branding",
    icon: <LayoutDashboard className="h-10 w-10 text-yellow-400" />,
    description: "Intuitive design and branding to make your product shine.",
    packages: [
      { name: "Basic", price: "Starts at $400" },
      { name: "Standard", price: "Starts at $1000" },
      { name: "Premium", price: "Starts at $2000" }
    ]
  },
  {
    title: "SEO & Digital Marketing",
    icon: <BarChart4 className="h-10 w-10 text-rose-400" />,
    description: "Boost your visibility with SEO and smart marketing strategies.",
    packages: [
      { name: "SEO", price: "Starts at $300/month" },
      { name: "Google Ads", price: "Custom Quote" },
      { name: "Content Strategy", price: "Starts at $400/month" }
    ]
  },
  {
    title: "Social Media Management",
    icon: <Users className="h-10 w-10 text-cyan-400" />,
    description: "Grow your audience and engagement across social platforms.",
    packages: [
      { name: "Starter", price: "$250/month" },
      { name: "Growth", price: "$600/month" },
      { name: "Pro", price: "$1000/month" }
    ]
  }
];

export default function Services() {
  const navigate = useNavigate();

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
          We’re a full-service software house offering custom packages across all services. Pricing and deliverables may vary based on project scope.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
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
                <p className="text-gray-400 text-sm text-center leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="w-full">
                  <p className="text-sm text-gray-300 font-semibold mb-2">Packages:</p>
                  <ul className="text-sm text-gray-400 mb-4 space-y-1">
                    {service.packages.map((pkg, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{pkg.name}</span>
                        <span className="text-right font-medium">{pkg.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Whether you're launching a startup or scaling your business, we’ve got the expertise to bring your vision to life.
          </p>
          <p className="text-xl font-semibold text-indigo-400">
            Let’s connect and build something amazing together!<br /> Team Indenio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
