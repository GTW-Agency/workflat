import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, X, ChevronDown, User, Building2, Shield } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSignInDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/jobs', label: 'Find Jobs' },
    { path: '/companies', label: 'Companies' },
    { path: '/candidates', label: 'Candidates' },
    { path: '/employers', label: 'For Employers' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About Us' },
  ];

  const signInOptions = [
    { 
      label: 'Job Seeker', 
      path: '/login?portal=jobseeker', 
      icon: User,
      description: 'Access your candidate profile'
    },
    { 
      label: 'Employer', 
      path: '/login?portal=employer', 
      icon: Building2,
      description: 'Manage job postings & applicants'
    },
    { 
      label: 'Admin', 
      path: '/login?portal=admin', 
      icon: Shield,
      description: 'Platform administration'
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full z-50 glass border-b border-gray-200/50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">WorkFlat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition ${
                  isActive(link.path)
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Sign In Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSignInDropdownOpen(!signInDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
                aria-expanded={signInDropdownOpen}
                aria-haspopup="true"
              >
                Sign In
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${signInDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Dropdown Menu */}
              {signInDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Select Portal
                    </div>
                    {signInOptions.map((option) => (
                      <Link
                        key={option.path}
                        to={option.path}
                        onClick={() => setSignInDropdownOpen(false)}
                        className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition group"
                      >
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition">
                          <option.icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition">
                            {option.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {option.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/employers"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition px-2 py-1 ${
                    isActive(link.path)
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Sign In Options */}
              <div className="pt-4 border-t border-gray-200">
                <div className="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Select Portal
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  {signInOptions.map((option) => (
                    <Link
                      key={option.path}
                      to={option.path}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <option.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-xs text-gray-500">{option.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/employers"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
