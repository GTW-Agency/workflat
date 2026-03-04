import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  ChevronRight, 
  TrendingUp, 
  FileCheck, 
  Plane,
  Briefcase
} from 'lucide-react';

const Home = () => {
  const featuredJobs = [
    { id: 1, title: 'Senior Frontend Engineer', company: 'Stripe', location: 'Remote', color: 'bg-purple-100 text-purple-600', letter: 'S' },
    { id: 2, title: 'Product Designer', company: 'Airbnb', location: 'San Francisco', color: 'bg-red-100 text-red-600', letter: 'A' },
    { id: 3, title: 'Marketing Manager', company: 'Meta', location: 'New York', color: 'bg-blue-100 text-blue-600', letter: 'M' },
  ];

  const companies = [
    { 
      name: 'Stripe', 
      industry: 'Financial Technology', 
      jobs: 24, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png',
      bgColor: 'bg-purple-50'
    },
    { 
      name: 'Airbnb', 
      industry: 'Travel & Hospitality', 
      jobs: 18, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
      bgColor: 'bg-red-50'
    },
    { 
      name: 'Meta', 
      industry: 'Social Technology', 
      jobs: 156, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png',
      bgColor: 'bg-blue-50'
    },
    { 
      name: 'Vercel', 
      industry: 'Developer Tools', 
      jobs: 12, 
      logo: 'https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png',
      bgColor: 'bg-gray-100'
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Modern office with city view" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm font-medium text-white">Over 10,000 jobs posted this week</span>
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-white">
                Find your next <br/>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">career move</span>
              </h1>
              
              <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
                Connect with top employers worldwide. Advanced matching, visa support, and relocation assistance—all in one platform.
              </p>

              {/* Search Box */}
              <div className="glass p-2 rounded-2xl shadow-xl max-w-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <form action="/jobs" className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="q" 
                      placeholder="Job title, keywords, or company" 
                      className="w-full outline-none text-sm bg-transparent"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      name="location" 
                      placeholder="City, state, or zip code" 
                      className="w-full outline-none text-sm bg-transparent"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-300 flex-wrap">
                <span>Popular:</span>
                <div className="flex gap-2 flex-wrap">
                  <Link to="/jobs?filter=remote" className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition">Remote</Link>
                  <Link to="/jobs?category=engineering" className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition">Engineering</Link>
                  <Link to="/jobs?category=marketing" className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition">Marketing</Link>
                  <Link to="/jobs?category=design" className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition">Design</Link>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl rotate-3 opacity-30 blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-lg text-white">Featured Jobs</h3>
                  <Link to="/jobs" className="text-sm text-indigo-400 font-medium hover:underline">View all</Link>
                </div>
                
                <div className="space-y-4">
                  {featuredJobs.map((job) => (
                    <Link 
                      key={job.id}
                      to={`/jobs?id=${job.id}`} 
                      className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-indigo-400/50 transition group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${job.color} rounded-lg flex items-center justify-center font-bold text-sm`}>
                          {job.letter}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-white group-hover:text-indigo-400 transition">{job.title}</div>
                          <div className="text-xs text-gray-400">{job.company} • {job.location}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 transition" />
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Applications Today</div>
                    <div className="font-bold text-lg">2,847</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-display text-3xl font-bold text-indigo-600">50k+</div>
              <div className="text-sm text-gray-600">Active Jobs</div>
            </div>
            <div className="space-y-1">
              <div className="font-display text-3xl font-bold text-purple-600">12k+</div>
              <div className="text-sm text-gray-600">Companies</div>
            </div>
            <div className="space-y-1">
              <div className="font-display text-3xl font-bold text-pink-600">1M+</div>
              <div className="text-sm text-gray-600">Job Seekers</div>
            </div>
            <div className="space-y-1">
              <div className="font-display text-3xl font-bold text-orange-600">150+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How WorkFlat Works</h2>
              <p className="text-gray-600 max-w-xl">Your journey to the perfect career move starts here. We make international job searching simple and stress-free.</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/how-it-works.jpg" 
                alt="Professional job interview handshake" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">1. Search Jobs</h3>
              <p className="text-gray-600">Browse thousands of opportunities with advanced filters for remote, visa sponsorship, and more.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">2. Apply Easily</h3>
              <p className="text-gray-600">One-click applications with your saved profile. Track status in real-time.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">3. Relocate</h3>
              <p className="text-gray-600">Get visa support and relocation assistance. We handle the paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies with Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">Featured Companies</h2>
              <p className="text-gray-600">Top employers hiring now</p>
            </div>
            <Link to="/companies" className="text-indigo-600 font-medium hover:underline flex items-center gap-1">
              View all companies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company) => (
              <Link 
                key={company.name}
                to={`/companies?company=${company.name.toLowerCase()}`} 
                className={`${company.bgColor} p-6 rounded-2xl border border-gray-200 card-hover group`}
              >
                <div className="h-12 mb-4 flex items-center">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="h-8 w-auto object-contain max-w-[120px]"
                  />
                </div>
                <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition">{company.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{company.industry}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span>{company.jobs} open jobs</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers CTA with Background Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/employer-cta-bg.jpg" 
            alt="Global network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-indigo-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Hire the best global talent</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Post jobs, manage applications, and find your next star employee with our advanced hiring tools.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/employers" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl flex items-center justify-center gap-2"
            >
              <span>Start Hiring</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 bg-indigo-500/80 backdrop-blur-sm text-white border-2 border-indigo-400 rounded-full font-semibold hover:bg-indigo-500 transition flex items-center justify-center gap-2"
            >
              <span>View Pricing</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
