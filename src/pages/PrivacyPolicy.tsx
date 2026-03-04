import { Link } from 'react-router-dom';
import { Shield, Database, Share2, Lock, User, Cookie, RefreshCw, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Privacy</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
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
                This Privacy Policy explains how WorkFlat collects, uses, and protects your personal data. By using our site, you consent to this policy.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Database className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="font-display text-xl font-bold">1. Information We Collect</h2>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">Personal details (name, email, phone number, location)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">CVs, job preferences, qualifications, and employment history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">IP address, device/browser data, and site usage behaviour</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="font-display text-xl font-bold">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Connect you with employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Process job and visa applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Send relevant job updates and communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Improve platform functionality</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-xl font-bold">3. Sharing Your Information</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We only share your data with trusted employers, partners, or government agencies when necessary for placement or visa processing.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="font-display text-xl font-bold">4. Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We implement technical and organizational safeguards to protect your information from unauthorized access or misuse.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-display text-xl font-bold">5. Your Rights</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600">Access your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600">Request corrections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600">Delete your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-600">Withdraw consent at any time</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="font-display text-xl font-bold">6. Cookies</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We use cookies to improve your experience. You can adjust cookie settings in your browser at any time. For more details, please see our <Link to="/cookie-policy" className="text-indigo-600 hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="font-display text-xl font-bold">7. Changes to This Policy</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We may update this policy as needed. Continued use of WorkFlat indicates your agreement to the revised terms.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-xl font-bold">8. Contact Us</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Questions or concerns? Email us at <a href="mailto:support@workflat.com" className="text-indigo-600 hover:underline">support@workflat.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
