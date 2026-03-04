import { useState } from 'react';
import { Search, MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const featuredCompanies = [
    {
      name: 'Stripe',
      industry: 'Financial Technology',
      location: 'San Francisco, CA',
      rating: 4.8,
      reviews: 234,
      description: 'Payments infrastructure for the internet. Stripe builds economic infrastructure for the internet.',
      jobs: 24,
      color: 'from-purple-600 to-indigo-600',
      letter: 'S'
    },
    {
      name: 'Linear',
      industry: 'Software Development',
      location: 'Remote First',
      rating: 4.9,
      reviews: 89,
      description: "The issue tracking tool you'll enjoy using. Linear helps streamline software projects, sprints, and tasks.",
      jobs: 8,
      color: 'from-blue-500 to-cyan-500',
      letter: 'L'
    },
    {
      name: 'Notion',
      industry: 'Productivity Software',
      location: 'New York, NY',
      rating: 4.7,
      reviews: 156,
      description: 'All-in-one workspace. One tool for your whole team. Write, plan, and get organized.',
      jobs: 15,
      color: 'from-green-500 to-emerald-600',
      letter: 'N'
    },
  ];

  const companies = [
    { name: 'Airbnb', industry: 'Travel & Hospitality', location: 'San Francisco, CA', rating: 4.6, jobs: 18, color: 'bg-red-100 text-red-600', letter: 'A' },
    { name: 'Meta', industry: 'Social Technology', location: 'Menlo Park, CA', rating: 4.3, jobs: 156, color: 'bg-blue-100 text-blue-600', letter: 'M' },
    { name: 'Vercel', industry: 'Developer Tools', location: 'Remote First', rating: 4.9, jobs: 12, color: 'bg-black text-white', letter: 'V' },
    { name: 'Figma', industry: 'Design Software', location: 'San Francisco, CA', rating: 4.8, jobs: 32, color: 'bg-orange-100 text-orange-600', letter: 'F' },
    { name: 'Spotify', industry: 'Music Streaming', location: 'Stockholm, Sweden', rating: 4.5, jobs: 45, color: 'bg-green-100 text-green-600', letter: 'S' },
    { name: 'Discord', industry: 'Communication', location: 'Remote First', rating: 4.7, jobs: 23, color: 'bg-indigo-100 text-indigo-600', letter: 'D' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-24 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold mb-2">Discover Great Companies</h1>
          <p className="text-gray-600">Explore 12,000+ employers worldwide. Read reviews, see open roles, and find your perfect match.</p>
        </div>
      </section>

      {/* Search */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search companies by name or industry" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-full md:w-48">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                <option>All Industries</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Manufacturing</option>
              </select>
            </div>
            <div className="w-full md:w-48">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                <option>All Locations</option>
                <option>Remote Friendly</option>
                <option>United States</option>
                <option>Europe</option>
                <option>Asia Pacific</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-12 bg-gradient-to-b from-indigo-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">Featured Employers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCompanies.map((company) => (
              <div 
                key={company.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover"
              >
                <div className={`h-32 bg-gradient-to-r ${company.color} relative`}>
                  <div className="absolute -bottom-8 left-6">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">{company.letter}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-12 pb-6 px-6">
                  <h3 className="font-bold text-xl mb-1">{company.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{company.industry} • {company.location}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {company.rating}
                    </span>
                    <span className="text-gray-500">{company.reviews} reviews</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{company.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-indigo-600">{company.jobs} open jobs</span>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold">All Companies</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  viewMode === 'grid' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                Grid
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  viewMode === 'list' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                List
              </button>
            </div>
          </div>

          <div className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {companies.map((company) => (
              <a 
                key={company.name}
                href="#" 
                className="bg-white rounded-2xl border border-gray-200 p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${company.color} rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                    {company.letter}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition">{company.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{company.industry}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {company.rating}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-indigo-600 font-medium">{company.jobs} open jobs</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition">
              Load More Companies
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Are you an employer?</h2>
          <p className="text-indigo-100 mb-8">Join 12,000+ companies already hiring on WorkFlat. Post jobs, manage applications, and find top talent.</p>
          <Link 
            to="/employers" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl"
          >
            Post a Job for Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Companies;
