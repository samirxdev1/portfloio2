
'use client';

import { useState, useEffect } from 'react';

export default function CertificatesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('certificates');
    if (element) {
      observer.observe(element);
    }
    
    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: 'Web Design & Development',
      issuer: 'Skill India Digital',
      date: '2024',
      description: 'Comprehensive certification covering modern web development practices, responsive design, and industry best practices.',
      image: '/cetificate/webdevelopment-1.png',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
      credentialId: 'SID-WD-2024-001',
      validUntil: 'Lifetime'
    },
    {
      title: 'PHP Development',
      issuer: 'Great Learning',
      date: '2024',
      description: 'Advanced PHP development certification covering server-side programming, database integration, and web application development.',
      image: '/cetificate/PHP.png',
      skills: ['PHP', 'MySQL', 'Laravel', 'Web Development', 'Backend'],
      credentialId: 'GL-PHP-2024-189',
      validUntil: 'Lifetime'
    },
    {
      title: 'Skill Development Program',
      issuer: 'HDRC (Human Development and Research Centre)',
      date: '2025',
      description: 'Government-certified skill development program focusing on technical skills and professional development.',
      image: '/cetificate/HDRC.jpeg',
      skills: ['Technical Skills', 'Professional Development', 'Industry Standards', 'Communication', 'Leadership'],
      credentialId: 'HDRC-SD-2025-334',
      validUntil: 'Lifetime'
    },
    {
      title: 'Deloitte Job Simulation',
      issuer: 'Deloitte',
      date: '2025',
      description: 'Professional job simulation program providing real-world experience in consulting and technology solutions.',
      image: '/cetificate/Deloite-1.png',
      skills: ['Consulting', 'Problem Solving', 'Technology Solutions', 'Business Analysis', 'Project Management'],
      credentialId: 'DLT-JS-2025-891',
      validUntil: 'Lifetime'
    }
  ];

  const achievements = [
    {
      title: 'Top Performer at adXcode Agency',
      description: 'Recognized as a top-performing Software Developer for exceptional contribution to multiple client projects and innovative solutions.',
      date: '2024',
      icon: 'ri-award-line',
      category: 'Performance Award'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to open source projects with focus on web development tools and educational resources.',
      date: 'Ongoing',
      icon: 'ri-github-line',
      category: 'Community Contribution'
    },
    {
      title: 'Full Stack Development Expert',
      description: 'Demonstrated expertise in MERN stack development with successful delivery of 10+ complex web applications.',
      date: '2024',
      icon: 'ri-code-line',
      category: 'Technical Excellence'
    },
    {
      title: 'Client Satisfaction Champion',
      description: 'Maintained 100% client satisfaction rate through excellent communication and quality deliverables.',
      date: 'Ongoing',
      icon: 'ri-customer-service-line',
      category: 'Client Relations'
    },
    {
      title: 'Learning & Growth Advocate',
      description: 'Continuously learning new technologies while pursuing BCA degree and maintaining professional work.',
      date: '2023-2028',
      icon: 'ri-graduation-cap-line',
      category: 'Professional Development'
    },
    {
      title: 'Problem Solving Excellence',
      description: 'Known for strong problem-solving skills and creative solutions to complex technical challenges.',
      date: 'Ongoing',
      icon: 'ri-lightbulb-line',
      category: 'Innovation'
    }
  ];

  return (
    <section id="certificates" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Achievements</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications and recognitions that validate my expertise and commitment to excellence
            </p>
          </div>
          
          {/* Professional Certifications */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-800 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.title}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 sm:h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <i className="ri-award-line text-blue-600 text-xl"></i>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="text-white text-sm font-medium">{cert.date}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        ID: {cert.credentialId}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Valid: {cert.validUntil}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-800 text-center">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`${achievement.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-blue-600 font-medium mb-1 uppercase tracking-wide">
                        {achievement.category}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="ri-calendar-line mr-1"></i>
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <i className="ri-close-line text-gray-600 text-xl"></i>
              </button>
              
              <img 
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-64 sm:h-80 object-cover object-top rounded-t-3xl"
              />
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-blue-600 font-semibold text-lg">{selectedCert.issuer}</p>
                <p className="text-gray-500 mt-1">{selectedCert.date}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedCert.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill: string) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Credential ID</h4>
                    <p className="text-gray-600 text-sm">{selectedCert.credentialId}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Valid Until</h4>
                    <p className="text-green-600 text-sm font-medium">{selectedCert.validUntil}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Close Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
