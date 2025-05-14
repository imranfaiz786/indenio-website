import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Clients Worldwide", value: 120 },
  { label: "Projects Completed", value: 300 },
  { label: "Team Members", value: 15 },
  { label: "Years of Experience", value: 8 },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalMs = 2000;
    let incrementTime = 30;
    let steps = Math.ceil(totalMs / incrementTime);
    let step = end / steps;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl md:text-5xl font-extrabold text-indigo-400 drop-shadow-md">
      {count}+
    </span>
  );
};

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-[#0A0A23] to-[#13132B] text-white py-24">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-500"
            >
              <Counter target={item.value} />
              <div className="mt-3 text-sm md:text-base text-gray-400">
                {item.label}
              </div>
              <div className="h-1 w-10 bg-indigo-500 mt-2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.7)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
