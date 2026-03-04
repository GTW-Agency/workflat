import { useState } from 'react';
import { Search, MapPin, Heart } from 'lucide-react';

const Jobs = () => {
  const [activeFilter, setActiveFilter] = useState('All Jobs');

  const quickFilters = ['All Jobs', 'Remote', 'Visa Sponsorship', 'Entry Level', 'Senior Level', 'Full-time'];

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      company: 'Stripe',
      location: 'Remote • Worldwide',
      salary: '$140k - $180k',
      type: 'Full-time',
      workType: 'Remote',
      description: "We're looking for an experienced Frontend Engineer to join our Dashboard team. You'll work on building beautiful, performant user interfaces used by millions of businesses worldwide.",
      tags: ['React', 'TypeScript', 'GraphQL'],
      featured: true,
      visa: true,
      color: 'bg-purple-100 text-purple-600',
      letter: 'S'
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'Airbnb',
      location: 'San Francisco, CA • Hybrid',
      salary: '$120k - $160k',
      type: 'Full-time',
      workType: 'Hybrid',
      description: "Join our design team to create exceptional experiences for hosts and guests. You'll work on cross-platform products that impact millions of users.",
      tags: ['Figma', 'Design Systems', 'Prototyping'],
      featured: false,
      visa: false,
      new: true,
      color: 'bg-red-100 text-red-600',
      letter: 'A'
    },
    {
      id: 3,
      title: 'UX Researcher',
      company: 'Meta',
      location: 'London, UK • On-site',
      salary: '£80k - £110k',
      type: 'Full-time',
      workType: 'On-site',
      description: "Conduct qualitative and quantitative research to inform product decisions. Work on products used by billions of people around the world.",
      tags: ['User Research', 'Data Analysis'],
      featured: false,
      visa: true,
      color: 'bg-blue-100 text-blue-600',
      letter: 'M'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Vercel',
      location: 'Remote • US/Canada',
      salary: '$130k - $170k',
      type: 'Contract',
      workType: 'Remote',
      description: "Help us build the infrastructure that powers the web. We're looking for someone passionate about developer experience and site reliability.",
      tags: ['AWS', 'Kubernetes', 'Terraform'],
      featured: false,
      visa: true,
      color: 'bg-black text-white',
      letter: 'V'
    },
    {
      id: 5,
      title: 'Marketing Manager',
      company: 'Notion',
      location: 'New York, NY • Hybrid',
      salary: '$90k - $120k',
      type: 'Full-time',
      workType: 'Hybrid',
      description: "Lead marketing initiatives for our B2B products. You'll work closely with sales and product teams to drive growth.",
      tags: ['B2B Marketing', 'Growth'],
      featured: false,
      visa: false,
      color: 'bg-green-100 text-green-600',
      letter: 'N'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-24 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold mb-2">Find Your Perfect Job</h1>
          <p className="text-gray-600">Discover 50,000+ opportunities worldwide</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Job title, keywords, or company" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="City, state, country, or remote" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
              Search Jobs
            </button>
          </div>
          
          {/* Quick Filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeFilter === filter
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-40">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <button className="text-sm text-indigo-600 hover:underline">Clear all</button>
                </div>

                {/* Date Posted */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Date Posted</h4>
                  <div className="space-y-2">
                    {['Last 24 hours', 'Last 3 days', 'Last 7 days', 'Last 30 days'].map((option, i) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="date" 
                          className="text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={i === 2}
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div className="mb-6 border-t pt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Internship'].map((option, i) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={i === 0}
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Type */}
                <div className="mb-6 border-t pt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Location</h4>
                  <div className="space-y-2">
                    {['Remote', 'On-site', 'Hybrid'].map((option, i) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={i === 0}
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div className="mb-6 border-t pt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Experience</h4>
                  <div className="space-y-2">
                    {['Entry Level', 'Mid Level', 'Senior Level', 'Executive'].map((option, i) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={i === 1}
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary Range */}
                <div className="border-t pt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
                  <input 
                    type="range" 
                    min="0" 
                    max="200000" 
                    step="10000" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$0</span>
                    <span>$200k+</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Job Listings */}
            <main className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">Showing <span className="font-semibold text-gray-900">1,247</span> jobs</p>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <div 
                    key={job.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 card-hover relative group"
                  >
                    <div className="absolute top-4 right-4 flex gap-2">
                      {job.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">Featured</span>
                      )}
                      {job.new && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">New</span>
                      )}
                      {job.visa && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Visa Sponsorship</span>
                      )}
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 ${job.color} rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                        {job.letter}
                      </div>
                      <div className="flex-1 pr-24">
                        <h3 className="font-semibold text-xl group-hover:text-indigo-600 transition mb-1">{job.title}</h3>
                        <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{job.salary}</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{job.type}</span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            job.workType === 'Remote' ? 'bg-blue-100 text-blue-700' :
                            job.workType === 'Hybrid' ? 'bg-purple-100 text-purple-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>{job.workType}</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex gap-2 flex-wrap">
                        {job.tags.map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 px-2 py-1 bg-gray-50 rounded">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button className="p-2 text-gray-400 hover:text-red-500 transition">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">24</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">Next</button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
