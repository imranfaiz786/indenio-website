// ------------------- FILE: src/pages/Home.jsx -------------------
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Servicescomp';
import Portfolio from '../components/Portfoliocomp';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Marquee from '../components/marquee';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Marquee />
      <Footer />
    </>
  );
}