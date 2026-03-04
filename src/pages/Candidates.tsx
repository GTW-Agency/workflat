import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  FileText, 
  MessageCircle, 
  Globe, 
  PenTool, 
  Users, 
  DollarSign, 
  Plane, 
  Network, 
  TrendingUp,
  Star
} from 'lucide-react';

const Candidates = () => {
  const [email, setEmail] = useState('');

  const quickTools = [
    {
      icon: FileText,
      title: 'Resume Builder',
      description: 'Create a professional resume with our ATS-friendly templates.',
      link: '#',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Interview Prep',
      description: 'Practice with AI-powered mock interviews and get feedback.',
      link: '#',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Globe,
      title: 'Visa Guide',
      description: 'Understand work visa requirements for different countries.',
      link: '#',
      color: 'bg-purple-100 text-purple-600'
    },
  ];

  const resources = [
    {
      icon: PenTool,
      title: 'How to Write a Winning Resume',
      category: 'Resume',
      description: "Learn the secrets to creating a resume that gets past ATS and catches recruiters' attention.",
      gradient: 'from-blue-500 to-indigo-600',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Users,
      title: 'Mastering Behavioral Interviews',
      category: 'Interview',
      description: 'The STAR method and other techniques to ace questions about your past experience.',
      gradient: 'from-purple-500 to-pink-600',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: DollarSign,
      title: 'Salary Negotiation Strategies',
      category: 'Negotiation',
      description: 'How to research, ask for, and secure the compensation you deserve.',
      gradient: 'from-green-500 to-teal-600',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Plane,
      title: 'Complete Guide to Work Visas',
      category: 'Relocation',
      description: 'Everything you need to know about H-1B, L-1, O-1, and other work visas.',
      gradient: 'from-orange-500 to-red-600',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Network,
      title: 'Building Your Professional Network',
      category: 'Networking',
      description: 'Strategies for connecting with industry professionals and finding hidden opportunities.',
      gradient: 'from-cyan-500 to-blue-600',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: TrendingUp,
      title: 'Switching Careers Successfully',
      category: 'Career Growth',
      description: 'How to pivot to a new industry or role while leveraging your existing skills.',
      gradient: 'from-indigo-500 to-purple-600',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Now at Google',
      quote: "WorkFlat's visa support team helped me navigate the H-1B process. I got my dream job within 3 months of starting my search.",
    },
    {
      name: 'Marcus Johnson',
      role: 'Now at Spotify',
      quote: 'The resume builder and interview prep tools were game-changers. I felt confident going into every interview.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Now at Airbnb',
      quote: 'I found a remote position that allowed me to relocate to Portugal. WorkFlat made the international job search so easy.',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Accelerate Your Career</h1>
            <p className="text-xl text-indigo-100 mb-8">Resources, tools, and guidance to help you land your dream job anywhere in the world.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/jobs" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <Search className="w-4 h-4" />
                Find Jobs
              </Link>
              <a 
                href="#resources" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 text-white border-2 border-indigo-400 rounded-full font-semibold hover:bg-indigo-400 transition"
              >
                <BookOpen className="w-4 h-4" />
                Explore Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {quickTools.map((tool) => (
              <div 
                key={tool.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-4`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <a href={tool.link} className="text-indigo-600 font-medium text-sm hover:underline">
                  {tool.title === 'Resume Builder' ? 'Build Resume' : tool.title === 'Interview Prep' ? 'Start Practicing' : 'Explore Guide'} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Career Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Expert advice to help you at every stage of your job search</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <article 
                key={resource.title}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover"
              >
                <div className={`h-48 bg-gradient-to-br ${resource.gradient} flex items-center justify-center`}>
                  <resource.icon className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-medium ${resource.color} ${resource.bgColor} px-2 py-1 rounded`}>
                    {resource.category}
                  </span>
                  <h3 className="font-semibold text-xl mt-2 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <a href="#" className="text-indigo-600 font-medium text-sm hover:underline">
                    Read Article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Get Career Advice Delivered</h2>
          <p className="text-gray-600 mb-8">Join 100,000+ subscribers receiving weekly job search tips, industry insights, and exclusive opportunities.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">No spam, unsubscribe anytime. Read our privacy policy.</p>
        </div>
      </section>
    </div>
  );
};

export default Candidates;
