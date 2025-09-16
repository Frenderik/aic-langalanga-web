import { useState, useEffect } from 'react'
import MinistryCard from '../components/MinistryCard'
import ServiceCard from '../components/ServiceCard'
import VideoCard from '../components/VideoCard'
import churchPhoto1 from '../assets/church-photo.jpg'
import churchPhoto2 from '../assets/Langalanga-church.png'

const HomePage = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [churchPhoto1, churchPhoto2]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const featuredMinistries = [
    {
      title: "Men's Fellowship",
      description: "A community of men dedicated to spiritual growth and supporting each other in faith.",
      leader: "Lawrence Kariuki",
      meetingTime: "Every Sunday, After Service",
      membersCount: 17
    },
    {
      title: "Women's Fellowship",
      description: "Empowering women through prayer, fellowship, and community service initiatives.",
      leader: "Mrs Kariuki",
      meetingTime: "Every Sunday, 2PM",
      membersCount: 40
    },
    {
      title: "Youth Ministry",
      description: "Engaging the younger generation with dynamic worship and relevant biblical teaching.",
      leader: "Sophia Kairu",
      meetingTime: "Every Saturday, 4PM",
      membersCount: 25
    }
  ]

  const services = [
    {
      title: "Sunday Main Service",
      time: "10:00 AM",
      description: "Join us for worship, prayer, and an inspiring message from God's Word.",
      leader: "Pastor Mbugua"
    },
    {
      title: "Thursday Prayer Meetings",
      time: "2:00 PM",
      description: "A midweek gathering for corporate prayer and spiritual refreshment.",
      leader: "A Minister Among the Group"
    },
    {
      title: "Youth Fellowship",
      time: "4:00 PM",
      description: "Dynamic worship and relevant teaching for the youth and young adults.",
      leader: "Teacher Sophia Kairo"
    }
  ]

  const videoData = [
    {
      title: "Choir Performance - Easter Sunday",
      description: "The church choir performing during our Easter Sunday service",
      date: "April 12, 2024",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      videoId: "dQw4w9WgXcQ"
    },
    
  ]

  return (
    <div>
      {/* Hero Section with Enhanced Slideshow Background */}
      <section className="relative py-20 px-4 text-center min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced Slideshow Background */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide}
                alt={`Church background ${index + 1}`}
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.8) contrast(1.05) saturate(1.1)'
                }}
              />
              {/* Lighter Gradient Overlay for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-indigo-900/40 to-purple-900/50 mix-blend-soft-light"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 to-purple-800/30"></div>
              
              {/* Lighter vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]"></div>
            </div>
          ))}
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-emerald-400 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Welcome to AIC Langalanga Church
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-8 drop-shadow-md font-light">
            A transformative faith community where lives are changed through the power of God's love
          </p>
          <button 
            onClick={() => setCurrentPage('services')}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/30 relative overflow-hidden group"
          >
            <span className="relative z-10">Join Us Every Sunday</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Ministries Section with Modern Design */}
      <section className="py-20 px-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-emerald-400 mr-4"></div>
              <span className="text-emerald-400 font-semibold tracking-wider">OUR COMMUNITY</span>
              <div className="w-12 h-0.5 bg-emerald-400 ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Church Ministries</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">Discover your purpose and connect with others through our diverse ministry opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredMinistries.map((ministry, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative">
                  <MinistryCard {...ministry} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('ministries')}
              className="border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-emerald-500 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore All Ministries</span>
              <div className="absolute inset-0 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Modern Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-cyan-400 mr-4"></div>
              <span className="text-cyan-400 font-semibold tracking-wider">WORSHIP WITH US</span>
              <div className="w-12 h-0.5 bg-cyan-400 ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Weekly Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">Experience transformative worship and spiritual growth throughout the week</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 transform group-hover:-translate-y-2">
                  <ServiceCard {...service} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section with Modern Design */}
      <section className="py-20 px-4 relative">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,_rgba(255,255,255,0.1)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.1)_50%,_rgba(255,255,255,0.1)_75%,_transparent_75%,_transparent)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-purple-400 mr-4"></div>
              <span className="text-purple-400 font-semibold tracking-wider">MEDIA GALLERY</span>
              <div className="w-12 h-0.5 bg-purple-400 ml-4"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Recent Media</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">Watch inspiring performances and meaningful moments from our church community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {videoData.map((video, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative transform transition-all duration-300 group-hover:scale-105">
                  <VideoCard {...video} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('media')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">View More Media</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg">
            Experience the warmth of our church family and begin your spiritual journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('services')}
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Plan Your Visit
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage