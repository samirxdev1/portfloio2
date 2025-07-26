
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Web Developer',
    'Backend Developer', 
    'Frontend Developer',
    'MERN Stack Developer'
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 w-full"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20software%20developer%20workspace%20with%20multiple%20monitors%2C%20modern%20office%20setup%2C%20coding%20environment%2C%20dark%20blue%20gradient%20background%2C%20technology%20atmosphere%2C%20clean%20minimal%20design%2C%20programming%20workspace%2C%20developer%20tools%2C%20inspiring%20tech%20environment&width=1920&height=1080&seq=hero-bg-developer&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90"></div>

      {/* Content */}
      <div className="w-full max-w-screen-lg mx-auto px-2 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`text-white transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-medium text-sm mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Samir Mansuri
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-12 sm:h-14">
              <span className="text-gray-300">I'm a </span>
              <span className="text-blue-400 transition-all duration-500">
                {roles[currentRole]}
              </span>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              I'm a passionate full-stack developer with a strong background in building modern web applications using MERN stack. 
              I enjoy solving real-world problems through code and continuously learning new technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                Let's Connect
              </button>
            </div>

            <div className="flex items-center space-x-6 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">3.5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative max-w-xs w-full h-full mx-auto flex items-center justify-center" style={{maxHeight: '80vh'}}>
              <img 
                src="/HeroSeaction1 (1).webp"
                alt="Samir Mansuri - Full Stack Web Developer in Godhra, Gujarat specializing in MERN stack and PHP development"
                className="w-full h-full object-contain rounded-2xl"
                style={{ background: 'transparent' }}
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 blur-xl animate-pulse"></div>

            {/* Tech Stack Cards */}
            <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="ri-reactjs-line text-cyan-400 text-2xl"></i>
                <span className="text-white font-medium">React</span>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="ri-nodejs-line text-green-400 text-2xl"></i>
                <span className="text-white font-medium">Node.js</span>
              </div>
            </div>

            <div className="absolute -left-6 bottom-1/4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="ri-database-line text-green-500 text-2xl"></i>
                <span className="text-white font-medium">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white/60 text-sm mb-4">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
