import { Cookie, Settings, ExternalLink, RefreshCw, Mail } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Cookie className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Cookies</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-indigo-100">
            <span>Effective Date: January 01, 2025</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed">
                At WorkFlat.com ("WorkFlat", "we", "our", or "us"), we use cookies and similar technologies to enhance your experience on our website and provide you with personalized content. By continuing to use our website, you consent to our use of cookies in accordance with this policy.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="font-display text-xl font-bold">What Are Cookies?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small files that are stored on your device (computer, tablet, mobile phone, etc.) when you visit a website. They are widely used to make websites work efficiently, as well as to provide website owners with information about how users interact with their site.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="font-display text-xl font-bold">How We Use Cookies</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600"><strong>Enhance website functionality:</strong> To make your browsing experience smoother and more efficient.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600"><strong>Analyze website performance:</strong> To track and analyze website traffic and user behavior, which helps us improve our website and services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600"><strong>Personalize content:</strong> To deliver more relevant and personalized content based on your preferences and interactions on our site.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600"><strong>Provide social media features:</strong> To enable sharing of content via social media platforms.</span>
                </li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-xl font-bold">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">1. Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation, security, and accessibility. These cookies are essential to your experience on our site.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">2. Performance Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies collect information about how users interact with our website, including which pages are visited most often and if users receive error messages from web pages. These cookies help us improve the performance and functionality of our website.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">3. Functionality Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies allow us to remember choices you make (such as language preference or region) and provide enhanced features. They are used to personalize your experience.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">4. Targeting or Advertising Cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These cookies are used to deliver advertisements that are relevant to you. They may be used by third-party advertisers to track your browsing habits across multiple websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="font-display text-xl font-bold">Third-Party Cookies</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We may also allow third-party service providers (such as advertisers and analytics providers) to set cookies on your device when you use our website. These third-party cookies are subject to the privacy policies of the third parties that set them. WorkFlat does not control these cookies and recommends you review the privacy policies of these third parties.
              </p>
            </div>

            {/* Managing Cookies */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-display text-xl font-bold">Managing Cookies</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to choose whether or not to accept cookies. You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600"><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can set your browser to block or delete cookies. However, please note that blocking or deleting cookies may affect your experience on our website and limit some features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600"><strong>Opting Out of Personalized Advertising:</strong> If you wish to opt out of targeted advertising, you can do so by visiting the Digital Advertising Alliance (DAA) opt-out page or the Network Advertising Initiative (NAI) website.</span>
                </li>
              </ul>
            </div>

            {/* Changes to This Cookie Policy */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="font-display text-xl font-bold">Changes to This Cookie Policy</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top of the page. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-xl font-bold">Contact Us</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Cookie Policy, please contact us at: <a href="mailto:support@workflat.com" className="text-indigo-600 hover:underline">support@workflat.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
