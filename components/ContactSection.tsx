'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('Contact')
        .insert([
          {
            full_name: formData.name,
            email_address: formData.email,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase insert error:', error);
        setSubmitStatus('error');
      } else {
        console.log('Data inserted successfully:', data);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      info: 'mansurisamir493@gmail.com',
      link: 'mailto:mansurisamir493@gmail.com',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      info: '+91 9409593511',
      link: 'tel:+919409593511',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      info: 'Godhra, Gujarat, India',
      link: '#',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-calendar-line',
      title: 'Available',
      info: 'Mon - Sat, 9AM - 9PM IST',
      link: '#',
      color: 'bg-orange-500'
    }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/samirxdev/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: 'ri-github-fill', href: 'https://github.com/Samir720', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: 'ri-mail-fill', href: 'mailto:mansurisamir493@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
    { icon: 'ri-phone-fill', href: 'tel:+919409593511', label: 'Phone', color: 'hover:bg-green-500' }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Success Message - Top Position */}
      {submitStatus === 'success' && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-full shadow-2xl border border-green-400/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-xl"></i>
              </div>
              <div>
                <div className="font-semibold">Message Sent Successfully!</div>
                <div className="text-sm opacity-90">I'll get back to you soon.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message - Top Position */}
      {submitStatus === 'error' && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-full shadow-2xl border border-red-400/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-error-warning-line text-xl"></i>
              </div>
              <div>
                <div className="font-semibold">Message Failed to Send</div>
                <div className="text-sm opacity-90">Please try again later.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's <span className="text-blue-400">Connect</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 font-medium text-sm">
                <i className="ri-contacts-book-line mr-2"></i>
                Contact Web Developer in Godhra
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.title}
                    className={`group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center ${contact.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <i className={`${contact.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{contact.title}</h4>
                      <a
                        href={contact.link}
                        className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                        title={contact.title === 'Location' ? 'Web Developer in Godhra, Gujarat' : contact.info}
                      >
                        {contact.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110 ${link.color} cursor-pointer`}
                      aria-label={link.label}
                    >
                      <i className={`${link.icon} text-white text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-xl font-semibold text-white mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-300 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent projects,
                  feel free to call or connect with me directly on LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 font-medium text-sm mb-6">
                <i className="ri-message-3-line mr-2"></i>
                Send Message
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Project discussion, consultation, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project, requirements, timeline, and budget..."
                  />
                  <div className="text-right text-sm text-gray-400 mt-2">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <i className="ri-send-plane-fill ml-2"></i>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
