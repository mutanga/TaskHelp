import React, { useState } from 'react';
import { Search, Star, Shield, CreditCard, Users, CheckCircle, Menu, X, ArrowRight, Filter } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  freelancer: string;
  rating: number;
  reviews: number;
  price: number;
  deliveryTime: string;
  category: string;
  image: string;
}

interface Freelancer {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  skills: string[];
  image: string;
}

const mockServices: Service[] = [
  {
    id: '1',
    title: 'Professional Logo Design',
    freelancer: 'Sarah Chen',
    rating: 4.9,
    reviews: 127,
    price: 150,
    deliveryTime: '3 days',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'React Web Development',
    freelancer: 'Mike Johnson',
    rating: 4.8,
    reviews: 89,
    price: 500,
    deliveryTime: '7 days',
    category: 'Development',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'Content Writing & SEO',
    freelancer: 'Emma Davis',
    rating: 4.9,
    reviews: 156,
    price: 75,
    deliveryTime: '2 days',
    category: 'Writing',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const mockFreelancers: Freelancer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'UI/UX Designer',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 45,
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Mike Johnson',
    title: 'Full Stack Developer',
    rating: 4.8,
    reviews: 89,
    hourlyRate: 65,
    skills: ['React', 'Node.js', 'TypeScript'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'freelancers' | 'login' | 'register'>('home');
  const [userType, setUserType] = useState<'client' | 'freelancer' | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Design', 'Development', 'Writing', 'Marketing', 'Business'];

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.freelancer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const Header = () => (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setCurrentView('home')}
            >
              <img src="/TaskHelp.png" alt="TaskHelp" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">TaskHelp</h1>
                <p className="text-xs text-gray-500 -mt-1">Get tasks done</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentView('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Browse Services
            </button>
            <button 
              onClick={() => setCurrentView('freelancers')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Find Freelancers
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              How it Works
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setCurrentView('login')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sign In
            </button>
            <button 
              onClick={() => setCurrentView('register')}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => { setCurrentView('services'); setIsMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Browse Services
            </button>
            <button 
              onClick={() => { setCurrentView('freelancers'); setIsMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Find Freelancers
            </button>
            <button className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
              How it Works
            </button>
            <hr className="border-gray-200" />
            <button 
              onClick={() => { setCurrentView('login'); setIsMenuOpen(false); }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sign In
            </button>
            <button 
              onClick={() => { setCurrentView('register'); setIsMenuOpen(false); }}
              className="block w-full bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <img src="/TaskHelp.png" alt="TaskHelp" className="h-20 w-20 mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Get Tasks <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Done</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Connect with skilled freelancers or offer your expertise. TaskHelp makes it easy to get work done with secure payments and quality assurance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => { setUserType('client'); setCurrentView('register'); }}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                I need help with tasks
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => { setUserType('freelancer'); setCurrentView('register'); }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                I want to offer my skills
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  onClick={() => setCurrentView('services')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TaskHelp?</h2>
            <p className="text-xl text-gray-600">Built for trust, security, and success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Escrow</h3>
              <p className="text-gray-600">Your payment is protected until work is completed and approved. Peace of mind guaranteed.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vetted Professionals</h3>
              <p className="text-gray-600">All freelancers are verified and rated by real clients. Quality work, every time.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Payments</h3>
              <p className="text-gray-600">Pay with Stripe, PayPal, crypto, Google Pay, or Apple Pay. Your choice, your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600">Get started with these trending services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">by {service.freelancer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">${service.price}</p>
                      <p className="text-sm text-gray-500">{service.deliveryTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentView('services')}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Services</h1>
          <p className="text-xl text-gray-600">Find the perfect service for your needs</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">by {service.freelancer}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">${service.price}</p>
                    <p className="text-sm text-gray-500">{service.deliveryTime} delivery</p>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FreelancersPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Freelancers</h1>
          <p className="text-xl text-gray-600">Connect with skilled professionals</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div className="text-center mb-6">
                <img src={freelancer.image} alt={freelancer.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{freelancer.name}</h3>
                <p className="text-gray-600 mb-2">{freelancer.title}</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{freelancer.rating}</span>
                  <span className="text-sm text-gray-500">({freelancer.reviews} reviews)</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">${freelancer.hourlyRate}/hr</p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src="/TaskHelp.png" alt="TaskHelp" className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign in
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentView('register')}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );

  const RegisterPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src="/TaskHelp.png" alt="TaskHelp" className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Join TaskHelp</h2>
          <p className="mt-2 text-gray-600">Create your account to get started</p>
        </div>

        {!userType && (
          <div className="space-y-4">
            <p className="text-center text-lg font-medium text-gray-700">I want to:</p>
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => setUserType('client')}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hire freelancers</h3>
                    <p className="text-gray-600">Find skilled professionals for your projects</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setUserType('freelancer')}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Offer my services</h3>
                    <p className="text-gray-600">Showcase your skills and earn money</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {userType && (
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                  placeholder="Create a strong password"
                />
              </div>
              {userType === 'freelancer' && (
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Skills
                  </label>
                  <input
                    id="skills"
                    name="skills"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="e.g., Web Design, React, Content Writing"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Create Account as {userType === 'client' ? 'Client' : 'Freelancer'}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => setCurrentView('login')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </button>
              </p>
            </div>
          </form>
        )}

        {userType && (
          <div className="text-center">
            <button
              onClick={() => setUserType(null)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to user type selection
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/TaskHelp.png" alt="TaskHelp" className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-bold">TaskHelp</h3>
                <p className="text-sm text-gray-400">Get tasks done</p>
              </div>
            </div>
            <p className="text-gray-400">
              Connect with skilled freelancers or offer your expertise with secure payments and quality assurance.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Browse Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Freelancers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Become a Seller</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust & Safety</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TaskHelp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Header />
      {currentView === 'home' && <HomePage />}
      {currentView === 'services' && <ServicesPage />}
      {currentView === 'freelancers' && <FreelancersPage />}
      {currentView === 'login' && <LoginPage />}
      {currentView === 'register' && <RegisterPage />}
      {currentView !== 'login' && currentView !== 'register' && <Footer />}
    </div>
  );
}

export default App;