
'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm">
                  <i className="ri-user-3-line mr-2"></i>
                  Get to know me
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  Passionate Developer Creating Digital Solutions
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with 3.5 years of experience in building modern web applications 
                    using the MERN stack. Currently working as a Software Developer at adXcode Agency, 
                    I specialize in creating scalable and efficient solutions that solve real-world problems.
                  </p>
                  <p>
                    My expertise spans across frontend technologies like React and Next.js, backend development 
                    with Node.js and Express.js, and database management with MongoDB and MySQL. 
                    I'm also skilled in PHP development and always eager to learn new technologies.
                  </p>
                  <p>
                    Based in Godhra, Gujarat, India, I'm currently pursuing my BCA degree while working 
                    full-time, demonstrating my commitment to continuous learning and professional growth.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <i className="ri-check-double-line text-green-500"></i>
                    <span>Strong Problem-Solving</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <i className="ri-check-double-line text-green-500"></i>
                    <span>Creative UI Design</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <i className="ri-check-double-line text-green-500"></i>
                    <span>Fast Learner</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <i className="ri-check-double-line text-green-500"></i>
                    <span>Client-Focused</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative max-w-sm mx-auto lg:max-w-md">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/About.png"
                    alt="Samir Mansuri working on web development projects - Professional developer from Godhra, Gujarat"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">3.5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
