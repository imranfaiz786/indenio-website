import React from "react";
import { motion } from "framer-motion";

const features = [
  "💻 Web Development",
  "📱 Mobile App Development",
  "🛒 E-commerce Solutions",
  "⚙️ Custom Software Development",
  "🎨 UI/UX Design & Branding",
  "📈 SEO & Digital Marketing",
  "📱 Social Media Management",
];

const MarqueeItem = ({ text }) => (
  <div className="px-6 py-3 bg-[#111121] text-white rounded-full border border-[#2D2D5A] shadow-[0_0_10px_rgba(93,112,255,0.2)] whitespace-nowrap text-sm md:text-base font-medium mx-3 hover:scale-105 transition-transform duration-300">
    {text}
  </div>
);

export default function Marquee() {
  return (
    <section className="bg-[#080818] py-16 overflow-hidden w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Powerful Features for Your Business
      </h2>

      {/* Row 1: Left to Right */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          <div className="flex">
            {[...features, ...features].map((item, index) => (
              <MarqueeItem key={`row1-${index}`} text={item} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="w-full overflow-hidden mt-6">
        <motion.div
          className="flex w-max"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          <div className="flex">
            {[...features, ...features].map((item, index) => (
              <MarqueeItem key={`row2-${index}`} text={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
