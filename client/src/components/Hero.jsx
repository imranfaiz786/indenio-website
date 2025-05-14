import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-[#0A0A23] text-white h-screen overflow-hidden px-4">
      {/* Inline Styles & Keyframes */}
      <style>{`
        @keyframes pulseWave {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05) translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes bounceDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .blur-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: pulseWave 6s ease-in-out infinite;
          z-index: 0;
        }

        .move-right {
          animation: moveRight 1.2s ease-in-out infinite;
        }

        @keyframes moveRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }

        .scroll-down {
          animation: bounceDown 1.6s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Blobs */}
      <div className="blur-circle w-[500px] h-[500px] bg-indigo-600 top-[-150px] left-[-200px]"></div>
      <div className="blur-circle w-[400px] h-[400px] bg-purple-500 bottom-[-150px] right-[-150px]"></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full text-center pt-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.2] tracking-tight mb-4"
        >
          Building Tomorrow’s<br />
          <span className="text-indigo-500">Digital Future</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From AI-powered apps to blazing fast eCommerce — we deliver innovation that elevates your business.
        </motion.p>

        {/* CTA Button */}
        <Link to="/services">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 shadow-[0_10px_30px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_10px_40px_-5px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          <span className="tracking-wide">Explore Our Services</span>
          <ArrowRight size={22} className="move-right" />
        </motion.button>
        </Link>
      </div>
    </section>
  );
}
