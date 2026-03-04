import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import About from './pages/About';
import FAQs from './pages/FAQs';
import OurFees from './pages/OurFees';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Layout wrapper that conditionally shows navigation and footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoginPage && <Navigation />}
      <main className={`flex-1 ${!isLoginPage ? 'pt-16' : ''}`}>
        {children}
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/register" element={<Login />} /> {/* Placeholder */}
          <Route path="/fees" element={<OurFees />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      
      {/* Cookie Banner - Simple implementation */}
      <CookieBanner />
    </Router>
  );
}

// Simple Cookie Banner Component
const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(() => {
    return !localStorage.getItem('cookiesAccepted');
  });

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies to enhance your experience. By continuing to use our site, you agree to our{' '}
          <a href="/cookie-policy" className="text-indigo-400 hover:underline">Cookie Policy</a>.
        </p>
        <button 
          onClick={acceptCookies}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition whitespace-nowrap"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

import { useState } from 'react';

export default App;
