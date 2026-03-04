import { Link } from 'react-router-dom';
import { 
  Globe, 
  ArrowRight, 
  Search, 
  Building2, 
  UserCheck, 
  FileText, 
  Plane, 
  Handshake,
  ShieldCheck,
  Award,
  Users,
  Eye,
  Target,
  Mail,
  Phone,
  MapPin,
  HeartPulse,
  Wrench,
  Cpu,
  Briefcase
} from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: Search,
      title: 'Direct-Hire Recruitment',
      description: 'We connect employers directly with qualified candidates for permanent positions, ensuring the right fit for both parties.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Building2,
      title: 'Employer Sourcing',
      description: 'We identify and vet reputable employers worldwide who offer legitimate, career-building opportunities.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: UserCheck,
      title: 'Candidate Profiling',
      description: 'Comprehensive evaluation of skills, credentials, and experience to ensure job-ready professionals.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FileText,
      title: 'Documentation Guidance',
      description: 'Expert assistance with visa applications, work permits, and regulatory compliance requirements.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Plane,
      title: 'Pre-Departure Prep',
      description: 'Comprehensive orientation and preparation to ensure smooth transition to your new work environment.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Handshake,
      title: 'Onboarding Coordination',
      description: 'We coordinate with employers to ensure seamless integration and successful start in your new role.',
      color: 'bg-indigo-100 text-indigo-600'
    },
  ];

  const sectors = [
    {
      icon: HeartPulse,
      title: 'Healthcare & Allied Health',
      description: 'Nurses, doctors, therapists, and medical technicians',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Wrench,
      title: 'Skilled Trades',
      description: 'Electricians, plumbers, carpenters, and construction specialists',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Cpu,
      title: 'Technical & Specialist Roles',
      description: 'Engineers, IT professionals, and technical specialists',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Accountants, consultants, and business professionals',
      color: 'bg-green-100 text-green-600'
    },
  ];

  const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '10k+', label: 'Successful Placements' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Global Workforce Solutions
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                Connecting Talent with <span className="gradient-text">Global Opportunity</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                WorkFlat is an international employment and talent mobility company connecting qualified professionals with verified overseas job opportunities. We specialize in direct-hire recruitment, helping skilled candidates secure legal, structured, and career-focused employment across global markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/jobs" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
                >
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl rotate-3 opacity-20 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                  alt="Modern global office workspace" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-lg font-semibold">Our Global Headquarters</p>
                  <p className="text-gray-200 text-sm">Where international careers begin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
                      alt="Professional recruitment office" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop" 
                      alt="Recruitment workspace" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop" 
                      alt="Modern office environment" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=300&fit=crop" 
                      alt="Professional office interior" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                WorkFlat operates as a cross-border workforce solutions provider, bridging the gap between global employers facing talent shortages and professionals seeking international career growth. Our focus is on regulated industries, structured placement processes, and compliance-driven recruitment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Compliance First</h3>
                    <p className="text-gray-600">Every placement follows legal employment and migration frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quality Screening</h3>
                    <p className="text-gray-600">We prioritize credential verification and skill assessment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Long-Term Fit</h3>
                    <p className="text-gray-600">We focus on sustainable employment, not short-term placement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive workforce solutions for global employment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 card-hover"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Core Sectors</h2>
              <p className="text-gray-600 text-lg mb-8">We specialize in placing qualified professionals across high-demand industries where skills transcend borders.</p>
              
              <div className="space-y-6">
                {sectors.map((sector) => (
                  <div key={sector.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className={`w-14 h-14 ${sector.color} rounded-xl flex items-center justify-center`}>
                      <sector.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{sector.title}</h3>
                      <p className="text-gray-600 text-sm">{sector.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl rotate-3 opacity-20 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=700&fit=crop" 
                  alt="Diverse international business team meeting" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-lg font-semibold">Global Team Collaboration</p>
                  <p className="text-gray-200 text-sm">Connecting professionals across continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto">Three key principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'Compliance First', description: 'Every placement follows legal employment and migration frameworks. We ensure all parties meet regulatory requirements.' },
              { number: '02', title: 'Quality Screening', description: 'We prioritize credential verification and skill assessment. Only qualified, job-ready candidates make it through our process.' },
              { number: '03', title: 'Long-Term Fit', description: 'We focus on sustainable employment, not short-term placement. Our success is measured by lasting career relationships.' },
            ].map((item) => (
              <div key={item.number} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold">{item.number}</span>
                </div>
                <h3 className="font-semibold text-2xl mb-4">{item.title}</h3>
                <p className="text-indigo-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a trusted global workforce mobility brand recognized for ethical recruitment, structured processes, and high-quality international placements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 border border-indigo-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To simplify international employment by providing transparent, professional, and compliant recruitment solutions for both employers and skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="font-display text-4xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Go Global?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Whether you're a professional seeking international opportunities or an employer looking for global talent, we're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/jobs" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-xl shadow-indigo-600/30"
            >
              <Search className="w-5 h-5" />
              Find Jobs
            </Link>
            <Link 
              to="/employers" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <Building2 className="w-5 h-5" />
              Hire Talent
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Have questions about international recruitment? Our team is here to help.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">info@workflat.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Headquarters</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option>Job Seeker</option>
                    <option>Employer</option>
                    <option>Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
                  Send Message
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our <Link to="/terms" className="text-indigo-600 hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
