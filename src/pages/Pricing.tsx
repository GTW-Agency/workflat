import { useState } from 'react';
import { Check, X, MessageCircle, Mail, ChevronDown } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      description: 'For small teams getting started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: '1 active job posting', included: true },
        { text: '30 days visibility', included: true },
        { text: 'Basic applicant tracking', included: true },
        { text: 'Email support', included: true },
        { text: 'Featured listings', included: false },
        { text: 'Candidate database access', included: false },
      ],
      cta: 'Get Started Free',
      ctaStyle: 'border-2 border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600',
      popular: false
    },
    {
      name: 'Standard',
      description: 'For growing companies',
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        { text: '5 active job postings', included: true, highlight: true },
        { text: '60 days visibility', included: true },
        { text: 'Company profile page', included: true },
        { text: '1 featured listing/month', included: true, highlight: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Priority email support', included: true },
      ],
      cta: 'Start 14-Day Free Trial',
      ctaStyle: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/30',
      popular: true
    },
    {
      name: 'Premium',
      description: 'For enterprises & agencies',
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        { text: 'Unlimited job postings', included: true, highlight: true },
        { text: '90 days visibility', included: true },
        { text: 'Enhanced company profile', included: true },
        { text: '3 featured listings/month', included: true, highlight: true },
        { text: 'Full candidate database access', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'API access', included: true },
      ],
      cta: 'Contact Sales',
      ctaStyle: 'bg-white text-gray-900 hover:bg-gray-100',
      popular: false,
      dark: true
    },
  ];

  const comparisonFeatures = [
    { name: 'Job postings', free: '1', standard: '5', premium: 'Unlimited' },
    { name: 'Job visibility', free: '30 days', standard: '60 days', premium: '90 days' },
    { name: 'Featured listings', free: '—', standard: '1/month', premium: '3/month' },
    { name: 'Company profile', free: 'Basic', standard: 'Standard', premium: 'Enhanced' },
    { name: 'Applicant tracking', free: 'Basic', standard: 'Advanced', premium: 'Advanced' },
    { name: 'Analytics dashboard', free: '—', standard: true, premium: true },
    { name: 'Candidate database', free: '—', standard: 'Limited', premium: true },
    { name: 'API access', free: '—', standard: '—', premium: true },
    { name: 'Support', free: 'Email', standard: 'Priority Email', premium: 'Dedicated Manager' },
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any payments.'
    },
    {
      question: 'What happens when my job posting expires?',
      answer: 'When a job expires, it becomes inactive but remains in your dashboard. You can renew it with one click or post a new job if you have available slots.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day free trial for paid plans. If you\'re not satisfied, you can cancel anytime. We don\'t offer refunds for partial months.'
    },
    {
      question: 'What\'s included in the featured listing?',
      answer: 'Featured listings appear at the top of search results, on the homepage, and in our newsletter. They receive 5x more views than standard listings.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your hiring needs. Upgrade or downgrade anytime.</p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex items-center gap-4 bg-gray-100 rounded-full p-1">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billingCycle === 'monthly' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
                billingCycle === 'yearly' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-3xl p-8 ${
                  plan.dark 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-sm' 
                    : plan.popular 
                      ? 'bg-white border-2 border-indigo-600 shadow-xl relative transform md:-translate-y-4' 
                      : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="popular-badge px-4 py-1 rounded-full text-white text-sm font-bold">MOST POPULAR</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={plan.dark ? 'text-gray-400' : 'text-gray-500'}>{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className={plan.dark ? 'text-gray-400' : 'text-gray-500'}>/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className={`flex items-start gap-3 ${!feature.included ? 'opacity-50' : ''}`}>
                      {feature.included ? (
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.dark ? 'text-green-400' : 'text-green-500'}`} />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.highlight && !plan.dark ? 'font-medium text-indigo-600' : plan.dark ? '' : 'text-gray-700'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Features</th>
                  <th className="text-center py-4 px-4 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-indigo-600">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-4 px-4">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? <Check className="w-5 h-5 text-green-500 inline" /> : '—'
                      ) : (
                        feature.free
                      )}
                    </td>
                    <td className={`text-center py-4 px-4 ${typeof feature.standard === 'string' && feature.standard !== '—' ? 'font-medium text-indigo-600' : ''}`}>
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? <Check className="w-5 h-5 text-green-500 inline" /> : '—'
                      ) : (
                        feature.standard
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? <Check className="w-5 h-5 text-green-500 inline" /> : '—'
                      ) : (
                        feature.premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-indigo-100 mb-8">Our team is here to help you choose the right plan for your hiring needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Sales
            </a>
            <a 
              href="mailto:sales@workflat.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 text-white border-2 border-indigo-400 rounded-full font-semibold hover:bg-indigo-400 transition"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
