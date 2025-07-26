
'use client';

import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%2C%20shopping%20cart%2C%20product%20listings%2C%20clean%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20web%20application%2C%20responsive%20layout&width=600&height=400&seq=ecommerce-project&orientation=landscape',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://readdy.ai/api/search-image?query=Task%20management%20dashboard%2C%20kanban%20board%2C%20project%20planning%20interface%2C%20modern%20UI%20design%2C%20productivity%20app%2C%20clean%20layout%2C%20purple%20and%20blue%20colors&width=600&height=400&seq=task-project&orientation=landscape',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://readdy.ai/api/search-image?query=Weather%20application%20interface%2C%20forecast%20dashboard%2C%20weather%20maps%2C%20modern%20weather%20app%20design%2C%20blue%20sky%20theme%2C%20clean%20UI%2C%20responsive%20layout&width=600&height=400&seq=weather-project&orientation=landscape',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'REST API Server',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation. Built with Node.js and Express.',
      image: 'https://readdy.ai/api/search-image?query=API%20documentation%20interface%2C%20server%20architecture%20diagram%2C%20backend%20development%2C%20code%20structure%2C%20technical%20documentation%2C%20modern%20developer%20tools%2C%20green%20and%20dark%20theme&width=600&height=400&seq=api-project&orientation=landscape',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%2C%20data%20visualization%2C%20charts%20and%20graphs%2C%20modern%20dashboard%20design%2C%20social%20media%20management%20interface%2C%20blue%20and%20purple%20gradients&width=600&height=400&seq=social-project&orientation=landscape',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, dark mode toggle, and contact form integration.',
      image: 'https://readdy.ai/api/search-image?query=Portfolio%20website%20design%2C%20developer%20portfolio%2C%20modern%20web%20design%2C%20responsive%20layout%2C%20professional%20presentation%2C%20clean%20aesthetic%2C%20blue%20and%20white%20theme&width=600&height=400&seq=portfolio-project&orientation=landscape',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Highlighted Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={`${project.title} - Samir Mansuri web development project showcasing ${project.technologies.join(', ')} technologies`}
                      className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-github-line"></i>
                        <span className="text-sm">Code</span>
                      </a>
                      <a 
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-external-link-line"></i>
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">All Projects</h3>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    selectedFilter === filter.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={`${project.title} - Samir Mansuri web development project showcasing ${project.technologies.join(', ')} technologies`}
                      className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-github-line"></i>
                        <span className="text-sm">Code</span>
                      </a>
                      <a 
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-external-link-line"></i>
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
