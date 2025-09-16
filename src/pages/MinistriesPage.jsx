import { useState } from 'react'
import MinistryCard from '../components/MinistryCard'
import battalionImage from '../assets/Battalion.png'

const MinistriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const ministries = [
    {
      title: "Church Men's Fellowship",
      description: "A community of men dedicated to spiritual growth and supporting each other in faith.",
      leader: "Lawrence Kariuki",
      meetingTime: "Every Sunday, After Service",
      membersCount: 17,
      category: "adults",
      image: "Men's Fellowship Image" // Placeholder text
    },
    {
      title: "Church Women's Fellowship",
      description: "Empowering women through prayer, fellowship, and community service initiatives.",
      leader: "Mrs Kariuki",
      meetingTime: "Every Sunday, 2PM",
      membersCount: 40,
      category: "adults",
      image: "Women's Fellowship Image" // Placeholder text
    },
    {
      title: "Youth Ministry",
      description: "Engaging the younger generation with dynamic worship and relevant biblical teaching.",
      leader: "Sophia Kairu",
      meetingTime: "Every Saturday, 4PM",
      membersCount: 25,
      category: "youth",
      image: "Youth Ministry Image" // Placeholder text
    },
    {
      title: "Revelation Vibe Choir",
      description: "Leading the congregation in worship through inspiring music and powerful song ministry.",
      leader: "Ann Mwangi",
      meetingTime: "Every Saturday, 2PM",
      membersCount: 20,
      category: "worship",
      image: "Choir Image" // Placeholder text
    },
    {
      title: "Prayer Committee",
      description: "Coordinating prayer efforts and interceding for the church and community needs.",
      leader: "Lucy Kinyanjui",
      meetingTime: "Weekly prayer sessions",
      membersCount: 10,
      category: "service",
      image: "Prayer Image" // Placeholder text
    },
    {
      title: "Star",
      description: "Our young members learn about God's love through interactive stories, songs, and creative play.",
      leader: "Dorris Kariuki",
      meetingTime: "Every Sunday, 8:30am",
      membersCount: 30,
      category: "children",
      image: "Star Ministry Image" // Placeholder text
    },
    {
      title: "Cadets",
      description: "Children develop their faith through Bible lessons and character-building exercises.",
      leader: "Mercy Njeri", 
      meetingTime: "Every Sunday, 8:30am",
      membersCount: 30,
      category: "children",
      image: "Cadets Image" // Placeholder text
    },
    {
      title: "Christian Battalion Services",
      description: "Teens engage in discussions and leadership development for Christian adulthood.",
      leader: "Davis Kariuki",
      meetingTime: "Every Sunday, 8:30am",
      membersCount: 30,
      category: "youth",
      image: battalionImage // Actual image import
    }
  ]

  const categories = [
    { id: 'all', label: 'All Ministries', count: ministries.length },
    { id: 'adults', label: 'Adults', count: ministries.filter(m => m.category === 'adults').length },
    { id: 'youth', label: 'Youth', count: ministries.filter(m => m.category === 'youth').length },
    { id: 'children', label: 'Children', count: ministries.filter(m => m.category === 'children').length },
    { id: 'worship', label: 'Worship', count: ministries.filter(m => m.category === 'worship').length },
    { id: 'service', label: 'Service', count: ministries.filter(m => m.category === 'service').length }
  ]

  const filteredMinistries = activeCategory === 'all' 
    ? ministries 
    : ministries.filter(ministry => ministry.category === activeCategory)

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-0.5 bg-emerald-400 mr-4"></div>
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">GET INVOLVED</span>
            <div className="w-16 h-0.5 bg-emerald-400 ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Church Ministries
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Discover your purpose and connect with others through our diverse ministry opportunities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                activeCategory === category.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <span className="relative z-10">
                {category.label}
              </span>
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-slate-700/50'
              }`}>
                {category.count}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          ))}
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMinistries.map((ministry, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative h-full">
                <MinistryCard {...ministry} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMinistries.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.86-6.09 2.28A7.96 7.96 0 014 12a8 8 0 1116 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No ministries found</h3>
            <p className="text-slate-400">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-10 border border-slate-700/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Join a Ministry?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              We'd love to help you find the perfect ministry where you can use your gifts, 
              grow in your faith, and make a difference in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us About Ministries
              </button>
              <button className="border-2 border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: ministries.length, label: "Total Ministries" },
            { number: ministries.reduce((sum, m) => sum + m.membersCount, 0), label: "Active Members" },
            { number: Math.max(...ministries.map(m => m.membersCount)), label: "Largest Ministry" },
            { number: new Set(ministries.map(m => m.leader)).size, label: "Dedicated Leaders" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-colors duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MinistriesPage