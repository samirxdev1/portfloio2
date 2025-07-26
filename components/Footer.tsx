
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'MERN Stack Development'
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/samirxdev/', icon: 'ri-linkedin-fill' },
    { name: 'GitHub', href: 'https://github.com/Samir720', icon: 'ri-github-fill' },
    { name: 'Email', href: 'mailto:mansurisamir493@gmail.com', icon: 'ri-mail-fill' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl sm:text-3xl font-bold font-pacifico text-blue-400">
              Samir.dev
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Web Developer passionate about creating modern, scalable web applications 
              using MERN stack technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300 cursor-pointer"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-blue-400"></i>
                <a 
                  href="mailto:mansurisamir493@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm"
                >
                  mansurisamir493@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-400"></i>
                <a 
                  href="tel:+919409593511"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm"
                >
                  +91 9409593511
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-blue-400"></i>
                <span className="text-gray-400 text-sm">
                  Godhra, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Samir Mansuri. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
              <div className="text-gray-400">
                Made with ❤️ in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
