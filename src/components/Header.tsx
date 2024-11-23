import React from 'react';
import { Youtube, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/spindaze', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/spindaze', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/spindaze', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@spindaze', label: 'YouTube' }
];

export function Header() {
  return (
    <header className="p-4 md:p-8 flex justify-between items-center max-w-7xl mx-auto w-full">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        spindaze<sup>®</sup>
      </h1>
      
      <div className="flex items-center gap-4 md:gap-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110"
            aria-label={label}
          >
            <Icon size={20} className="stroke-2" />
          </a>
        ))}
      </div>
    </header>
  );
}