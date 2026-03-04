import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  User, 
  Tag,
  TrendingUp,
  Globe,
  Briefcase,
  Plane,
  FileText,
  HeartPulse,
  Cpu,
  GraduationCap
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  icon: React.ElementType;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Secure a Work Visa in 2025: A Complete Guide",
    excerpt: "Navigate the complex world of work visas with our comprehensive guide covering H-1B, L-1, O-1, and other popular visa categories for international professionals.",
    content: "",
    author: "Sarah Mitchell",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Visa & Immigration",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    icon: FileText,
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Countries for Healthcare Professionals in 2025",
    excerpt: "Discover the best destinations for nurses, doctors, and allied health professionals seeking international career opportunities and competitive salaries.",
    content: "",
    author: "Dr. James Chen",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    icon: HeartPulse
  },
  {
    id: 3,
    title: "The Future of Remote Work: Global Talent Trends",
    excerpt: "Explore how companies are adapting to remote work and what it means for international job seekers looking for flexible employment opportunities.",
    content: "",
    author: "Emily Rodriguez",
    date: "January 10, 2025",
    readTime: "5 min read",
    category: "Career Trends",
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=800&h=500&fit=crop",
    icon: TrendingUp
  },
  {
    id: 4,
    title: "IT Jobs Abroad: Skills That Are in High Demand",
    excerpt: "From cloud computing to AI, learn which tech skills are most sought after by employers worldwide and how to position yourself for success.",
    content: "",
    author: "Michael Park",
    date: "January 8, 2025",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
    icon: Cpu
  },
  {
    id: 5,
    title: "Preparing for Your First International Job Interview",
    excerpt: "Essential tips and strategies to ace your international job interview, including cultural considerations and common questions to expect.",
    content: "",
    author: "Lisa Thompson",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop",
    icon: Briefcase
  },
  {
    id: 6,
    title: "Cost of Living Comparison: Popular Expat Destinations",
    excerpt: "A detailed breakdown of living costs in major cities worldwide to help you plan your international move and negotiate your salary effectively.",
    content: "",
    author: "David Kumar",
    date: "January 3, 2025",
    readTime: "9 min read",
    category: "Relocation",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=500&fit=crop",
    icon: Plane
  },
  {
    id: 7,
    title: "Engineering Careers Overseas: Opportunities and Challenges",
    excerpt: "Engineers are in demand worldwide. Learn about licensing requirements, salary expectations, and the best countries for engineering professionals.",
    content: "",
    author: "Robert Zhang",
    date: "December 28, 2024",
    readTime: "7 min read",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=800&h=500&fit=crop",
    icon: GraduationCap
  },
  {
    id: 8,
    title: "Building a Global Professional Network",
    excerpt: "Strategies for expanding your professional connections internationally and leveraging networking for career advancement abroad.",
    content: "",
    author: "Anna Williams",
    date: "December 25, 2024",
    readTime: "5 min read",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
    icon: Globe
  }
];

const categories = [
  "All",
  "Visa & Immigration",
  "Healthcare",
  "Technology",
  "Career Trends",
  "Interview Tips",
  "Relocation",
  "Engineering",
  "Networking"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">WorkFlat Blog</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Career Insights & Global Opportunities
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Expert advice, industry trends, and tips for international job seekers and employers
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <h2 className="font-display text-xl font-bold">Featured Article</h2>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{featuredPost.author}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold">
              {searchQuery ? `Search Results (${regularPosts.length})` : 'Latest Articles'}
            </h2>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <post.icon className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Stay Updated with Global Career Insights
          </h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest job opportunities, visa updates, and career advice delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-indigo-200 text-sm mt-4">
            By subscribing, you agree to our <Link to="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>
          </p>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Work Visa",
              "Healthcare Jobs",
              "Tech Careers",
              "Remote Work",
              "Salary Negotiation",
              "Interview Tips",
              "Relocation",
              "Engineering",
              "Nursing Abroad",
              "IT Jobs",
              "Career Change",
              "Global Networking"
            ].map((topic) => (
              <Link
                key={topic}
                to={`/blog?topic=${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition flex items-center gap-2"
              >
                <Tag className="w-3 h-3" />
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
