import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Zap, 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Headphones,
  Star
} from 'lucide-react';

const Employers = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: 'Remote',
    type: 'Full-time',
    salary: '',
    description: '',
    visa: false
  });

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access talent from 150+ countries. Our platform supports international hiring with built-in visa guidance.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Smart Matching',
      description: 'AI-powered candidate matching based on skills, experience, and culture fit. Save time reviewing unqualified applicants.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: 'Collaborative Hiring',
      description: 'Invite team members, share feedback, and track candidates through your custom pipeline stages.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Candidates',
      description: 'Every candidate profile is verified. Access background checks, skill assessments, and reference checks.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track posting performance, source effectiveness, and time-to-hire with detailed reports and insights.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Get help from our recruiting experts. From job description optimization to offer negotiation support.',
      color: 'bg-indigo-100 text-indigo-600'
    },
  ];

  const steps = [
    { number: '1', title: 'Create Account', description: 'Sign up for free and set up your company profile in minutes.' },
    { number: '2', title: 'Post Your Job', description: 'Use our AI-powered job description builder or write your own.' },
    { number: '3', title: 'Review Candidates', description: 'Get matched with qualified candidates and manage applications.' },
    { number: '4', title: 'Make Your Hire', description: 'Interview, extend offers, and onboard your new team member.' },
  ];

  const testimonials = [
    {
      quote: "We hired 3 senior engineers in just 2 weeks. The quality of candidates on WorkFlat is exceptional, and the visa support made international hiring seamless.",
      name: 'Jennifer Walsh',
      role: 'VP of Engineering, TechCorp'
    },
    {
      quote: "The AI matching saved us countless hours. We only interviewed candidates who were actually qualified, and our time-to-hire dropped by 60%.",
      name: 'David Kim',
      role: 'Head of Talent, StartupXYZ'
    },
    {
      quote: "We've tried many job boards, but WorkFlat consistently delivers the best ROI. The candidate quality and support are unmatched.",
      name: 'Maria Santos',
      role: 'Recruiting Manager, GlobalTech'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Job posted successfully! (Demo)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Hire the best global talent</h1>
              <p className="text-xl text-indigo-100 mb-8">Post jobs, manage applications, and build your dream team with our advanced recruiting platform. Visa support included.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#post-job" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl"
                >
                  Post a Job for Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 text-white border-2 border-indigo-400 rounded-full font-semibold hover:bg-indigo-400 transition"
                >
                  View Pricing
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-indigo-100 flex-wrap">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> No credit card required</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 14-day free trial</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">New Applicant</div>
                    <div className="text-indigo-200 text-sm">Senior Frontend Engineer</div>
                  </div>
                  <span className="ml-auto px-3 py-1 bg-green-400 text-green-900 text-xs font-bold rounded-full">NEW</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-indigo-200">5 years experience • React, TypeScript</div>
                    </div>
                    <button className="px-3 py-1 bg-white text-indigo-600 text-sm rounded-lg font-medium">View</button>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium">Mike Chen</div>
                      <div className="text-sm text-indigo-200">8 years experience • Full Stack</div>
                    </div>
                    <button className="px-3 py-1 bg-white text-indigo-600 text-sm rounded-lg font-medium">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-3xl font-bold text-indigo-600">1M+</div>
              <div className="text-sm text-gray-600">Active Candidates</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-pink-600">48h</div>
              <div className="text-sm text-gray-600">Avg. Time to First Applicant</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-gray-600">Employer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Everything You Need to Hire</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Powerful tools to streamline your recruiting process from posting to onboarding.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 card-hover"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Start hiring in minutes, not days</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post Job Form */}
      <section id="post-job" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Post Your First Job</h2>
            <p className="text-gray-600">Start with our free plan. No credit card required.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g. Senior Frontend Engineer" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Location *</label>
                  <select 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option>Remote</option>
                    <option>On-site</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                  <input 
                    type="text" 
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                    placeholder="e.g. $100k - $150k" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
                <textarea 
                  rows={6} 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe the role, responsibilities, and requirements..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="visa" 
                  checked={formData.visa}
                  onChange={(e) => setFormData({...formData, visa: e.target.checked})}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="visa" className="text-sm text-gray-700">We offer visa sponsorship for this role</label>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
              >
                Post Job for Free
              </button>

              <p className="text-xs text-gray-500 text-center">
                By posting, you agree to our <Link to="/terms" className="text-indigo-600 hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Trusted by Leading Companies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
