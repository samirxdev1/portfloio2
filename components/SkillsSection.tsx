
'use client';

import { useState, useEffect } from 'react';

export default function SkillsSection() {
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
    
    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML', level: 95, icon: 'ri-html5-line', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, icon: 'ri-css3-line', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, icon: 'ri-javascript-line', color: 'from-yellow-400 to-orange-500' },
    { name: 'PHP', level: 90, icon: 'ri-code-line', color: 'from-purple-600 to-indigo-600' },
    { name: 'Node.js', level: 75, icon: 'ri-nodejs-line', color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', level: 70, icon: 'ri-server-line', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', level: 75, icon: 'ri-database-line', color: 'from-green-600 to-teal-600' },
    { name: 'React', level: 70, icon: 'ri-reactjs-line', color: 'from-blue-400 to-cyan-500' },
    { name: 'Next.js', level: 70, icon: 'ri-code-box-line', color: 'from-gray-700 to-gray-900' },
    { name: 'MySQL', level: 98, icon: 'ri-database-2-line', color: 'from-blue-600 to-indigo-600' }
  ];

  const tools = [
    { name: 'VS Code', icon: 'ri-code-box-line', color: 'bg-blue-500' },
    { name: 'Postman', icon: 'ri-api-line', color: 'bg-orange-600' },
    { name: 'Git', icon: 'ri-git-branch-line', color: 'bg-red-500' },
    { name: 'GitHub', icon: 'ri-github-line', color: 'bg-gray-800' },
    { name: 'Figma', icon: 'ri-palette-line', color: 'bg-purple-500' },
    { name: 'Supabase', icon: 'ri-database-line', color: 'bg-green-500' },
    { name: 'MySQL', icon: 'ri-database-2-line', color: 'bg-blue-600' },
    { name: 'Chrome DevTools', icon: 'ri-tools-line', color: 'bg-yellow-500' }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Skills & <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring your ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Technical Skills */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium text-sm">
                <i className="ri-code-line mr-2"></i>
                Technical Skills
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                          <i className={`${skill.icon} text-xl text-gray-700`}></i>
                        </div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-medium text-sm">
                <i className="ri-tools-line mr-2"></i>
                Tools & Technologies
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={tool.name}
                    className={`group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center ${tool.color} rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <i className={`${tool.icon} text-white text-xl`}></i>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-center">{tool.name}</h4>
                  </div>
                ))}
              </div>
              
              {/* What I Bring */}
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="ri-star-line text-yellow-500 mr-2"></i>
                  What I Bring to Your Project
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-600">Clean, scalable, and maintainable code architecture</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-600">Mobile-first responsive design approach</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-600">Strong problem-solving and creative UI solutions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-600">Fast learning and adaptation to new technologies</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-600">Client-focused approach with excellent communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
