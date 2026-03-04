import { Link } from 'react-router-dom';
import { FileText, Calendar, Mail, Shield, UserCheck, CreditCard, AlertTriangle, Lock, XCircle, RefreshCw } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <FileText className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <div className="flex items-center justify-center gap-2 text-indigo-100">
            <Calendar className="w-4 h-4" />
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
                Welcome to WorkFlat.com ("WorkFlat", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website, services, and tools, whether as a job seeker, employer, or visitor. By using WorkFlat, you agree to these Terms and our <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="font-display text-xl font-bold">1. Use of the Platform</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                WorkFlat provides recruitment services to international job seekers and employers. Users may:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">Create a profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">Upload a CV/resume</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">Browse available jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span className="text-gray-600">Receive application and visa support (paid service)</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You must be at least 18 years old and legally eligible to work in your desired country of employment.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="font-display text-xl font-bold">2. User Accounts</h2>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Provide accurate and complete information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Update your profile as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span className="text-gray-600">Not impersonate any other person or entity</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-xl font-bold">3. Recruitment Services</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                WorkFlat charges fees for personalized job search, application handling, interview coordination, and visa assistance. Services include:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Application submissions on your behalf</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Employer matchmaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Immigration and relocation support</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Please review our <Link to="/fees" className="text-indigo-600 hover:underline">Our Fees</Link> page for pricing and eligibility.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="font-display text-xl font-bold">4. Employer Obligations</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Employers must ensure all job listings are legitimate and compliant with employment laws. We reserve the right to remove any job postings that are:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span className="text-gray-600">Misleading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span className="text-gray-600">Discriminatory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span className="text-gray-600">Fraudulent or harmful</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-pink-600" />
                </div>
                <h2 className="font-display text-xl font-bold">5. Payment & Refund Policy</h2>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span className="text-gray-600">A registration fee is required before job application services begin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span className="text-gray-600">Payments are non-refundable once services have started.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span className="text-gray-600">A success fee is payable only if you receive both a formal job offer and visa approval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span className="text-gray-600">If employment is not secured or your visa is denied, no success fee will be charged.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="font-display text-xl font-bold">6. Prohibited Conduct</h2>
              </div>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-600">Post false or misleading information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-600">Attempt to access other users' accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-600">Use bots or scripts to interact with the site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-600">Harass, threaten, or exploit others</span>
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="font-display text-xl font-bold">7. Intellectual Property</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                All content on WorkFlat, including logos, designs, and software, is the property of WorkFlat or its licensors. You may not copy, reproduce, or distribute our content without written permission.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gray-600" />
                </div>
                <h2 className="font-display text-xl font-bold">8. Disclaimer and Limitation of Liability</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do our best to match candidates with opportunities but do not guarantee employment. WorkFlat is not liable for:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Employer decisions or conduct</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Visa rejections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Service interruptions</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Use of the platform is at your own risk.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="font-display text-xl font-bold">9. Termination</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We may suspend or terminate your account at any time if we believe you have violated these Terms. You may also delete your account at any time.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="font-display text-xl font-bold">10. Changes to These Terms</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms from time to time. Continued use of the platform after changes constitutes your acceptance.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-display text-xl font-bold">11. Contact Us</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms, email: <a href="mailto:support@workflat.com" className="text-indigo-600 hover:underline">support@workflat.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
