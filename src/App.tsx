import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
 
<section id="cv" className="max-w-5xl mx-auto px-6 py-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-3xl font-semibold tracking-tight text-gray-200">
      Curriculum Vitae
    </h2>

    <a
      href="/cv/resume.pdf"
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5
             text-sm font-medium text-white transition hover:bg-gray-800"
    >
      Download CV
    </a>
  </div>

  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
    <iframe
      src="/cv/resume.pdf"
      className="w-full h-[900px] rounded-lg bg-white"
      loading="lazy"
    ></iframe>
  </div>
</section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;