
'use client';

import { useState, useEffect } from 'react';

export default function EducationSection() {
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
    
    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'ITM SLS Baroda University',
      period: '2025 - 2028',
      description: 'Currently pursuing BCA degree focusing on computer applications, programming, and software development.',
      achievements: ['Current Student', 'Balancing full-time work and studies', 'Focus on practical programming skills'],
      status: 'In Progress'
    },
    {
      degree: '12th Standard - Commerce Stream',
      school: 'The Iqbal Union High School',
      period: '2023 - 2025',
      description: 'Completed higher secondary education in Commerce stream with focus on business studies and mathematics.',
      achievements: ['Commerce Stream Graduate', 'Strong foundation in business concepts', 'Developed analytical thinking skills'],
      status: 'Completed'
    }
  ];

  const learningJourney = [
    {
      year: '2021',
      title: 'Started Programming Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript. Discovered passion for coding.',
      icon: 'ri-code-line'
    },
    {
      year: '2022',
      title: 'Mastered Frontend Technologies',
      description: 'Deep dive into React.js, advanced CSS, and modern JavaScript ES6+. Built first responsive websites.',
      icon: 'ri-reactjs-line'
    },
    {
      year: '2023-1',
      title: 'Backend Development',
      description: 'Learned Node.js, Express.js, and database management with MongoDB and MySQL.',
      icon: 'ri-server-line'
    },
    {
      year: '2023-2',
      title: 'Started Professional Career',
      description: 'Joined adXcode Agency as a Software Developer. Started working on real client projects.',
      icon: 'ri-briefcase-line'
    },
    {
      year: '2024',
      title: 'Full Stack Expertise',
      description: 'Achieved proficiency in MERN stack development. Earned multiple professional certifications.',
      icon: 'ri-award-line'
    },
    {
      year: '2025',
      title: 'Continuous Learning',
      description: 'Started BCA degree while maintaining full-time work. Expanding knowledge in advanced technologies.',
      icon: 'ri-graduation-cap-line'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Education & <span className="text-blue-600">Learning Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">Formal Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={edu.degree}
                    className={`bg-gray-50 rounded-lg p-6 transition-all duration-500 transform ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                        <i className="ri-school-line text-blue-600 text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'In Progress' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                        <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                        <p className="text-gray-600 mb-4">{edu.description}</p>
                        <div className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <i className="ri-check-line text-green-500 mr-2"></i>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Indian%20university%20campus%2C%20ITM%20SLS%20Baroda%20University%20building%2C%20students%20with%20laptops%2C%20modern%20educational%20environment%2C%20computer%20science%20education%2C%20inspiring%20learning%20atmosphere%2C%20contemporary%20university%20architecture%2C%20technology%20education%20in%20India&width=600&height=400&seq=education-journey&orientation=landscape"
                alt="Education Journey"
                className="w-full rounded-lg shadow-lg object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3.5+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Learning Timeline</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              <div className="space-y-8">
                {learningJourney.map((item, index) => (
                  <div 
                    key={item.year}
                    className={`relative flex items-start space-x-6 transition-all duration-500 transform ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full flex-shrink-0">
                      <i className={`${item.icon} text-white text-sm`}></i>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-bold text-blue-600">{item.year}</span>
                        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
