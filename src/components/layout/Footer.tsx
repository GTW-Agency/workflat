import { Link } from 'react-router-dom';
import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">WorkFlat</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Connecting talent with opportunity worldwide. Your trusted partner in global workforce mobility.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* For Job Seekers Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">For Job Seekers</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-white transition duration-200">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/candidates" className="text-gray-400 hover:text-white transition duration-200">
                  Candidate Resources
                </Link>
              </li>
              <li>
                <Link to="/register?type=candidate" className="text-gray-400 hover:text-white transition duration-200">
                  Register CV
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-gray-400 hover:text-white transition duration-200">
                  Our Fees
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">For Employers</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/employers" className="text-gray-400 hover:text-white transition duration-200">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-gray-400 hover:text-white transition duration-200">
                  Recruitment Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition duration-200">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 WorkFlat.com. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
              <span>|</span>
              <Link to="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
