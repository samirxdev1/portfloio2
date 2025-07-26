
'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesSection from '@/components/CertificatesSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Add structured data for breadcrumbs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://samirxdev.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://samirxdev.com#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Skills",
          "item": "https://samirxdev.com#skills"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Projects",
          "item": "https://samirxdev.com#projects"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://samirxdev.com#contact"
        }
      ]
    };

    // Add FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Samir Mansuri offer as a web developer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Samir Mansuri offers full stack web development services including MERN stack development, PHP development, frontend development with React and Next.js, backend development with Node.js and Express.js, and database management with MongoDB and MySQL."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Samir Mansuri located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Samir Mansuri is based in Godhra, Gujarat, India and provides web development services to clients locally and globally."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does Samir Mansuri specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Samir Mansuri specializes in HTML, CSS, JavaScript, PHP, Node.js, Express.js, MongoDB, React, Next.js, and MySQL with 3.5+ years of experience."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Samir Mansuri for web development projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Samir Mansuri via email at mansurisamir493@gmail.com, phone at +91 9409593511, or through his LinkedIn profile at https://www.linkedin.com/in/samirxdev/"
          }
        }
      ]
    };

    // Add schemas to head
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Cleanup function
    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}