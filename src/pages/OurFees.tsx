import { Link } from 'react-router-dom';
import { DollarSign, Check, FileText, Award, Globe, Mail, ArrowRight } from 'lucide-react';

const OurFees = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <DollarSign className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Transparent Pricing</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Fees
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            At WorkFlat, we provide personalized recruitment services to international job seekers aiming to work abroad. Our process is hands-on, and our pricing is transparent—so you always know what to expect.
          </p>
        </div>
      </section>

      {/* Main Fees */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Registration Fee */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">Registration Fee</h2>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-indigo-600">$150</span>
                <span className="text-gray-500">USD</span>
              </div>
              <p className="text-gray-600 mb-6">One-time, non-refundable fee</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Review and enhancement of your profile and CV</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Activation of your candidate file in our system</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Matching you with suitable job opportunities abroad</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                You only pay this when you're ready for us to begin applying for jobs on your behalf.
              </p>
            </div>

            {/* Success Fee */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">Success Fee</h2>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">$10,000</span>
                <span className="text-indigo-200">USD</span>
              </div>
              <p className="text-indigo-100 mb-6">Payable only after success</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">You receive a confirmed job offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Your visa application is approved</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Interview coordination and employer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Guidance through visa and immigration procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-100">Post-approval relocation support</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-indigo-200 bg-white/10 p-4 rounded-xl">
                If you're not hired or your visa is denied, you will not be charged this fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Services */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              <span>Optional Services</span>
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">These are only charged if needed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Document Translation</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-2">From $30</p>
              <p className="text-gray-600 text-sm">Per page</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Credential Evaluation</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-2">From $100</p>
              <p className="text-gray-600 text-sm">Depending on country requirements</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Additional Country Applications</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-2">$50</p>
              <p className="text-gray-600 text-sm">Per country</p>
            </div>
          </div>
        </div>
      </section>

      {/* No Hidden Costs */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">No Hidden Costs</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We commit to fair, upfront pricing. All fees will be discussed and agreed upon before any services begin. You're never billed for anything you haven't approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/faqs" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 transition"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Contact our support team for assistance or to learn more about our process.
          </p>
          <a 
            href="mailto:support@workflat.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            support@workflat.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurFees;
