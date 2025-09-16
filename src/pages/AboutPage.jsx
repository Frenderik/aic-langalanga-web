import { useState } from 'react'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission')

  return (
    <div className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-0.5 bg-emerald-400 mr-4"></div>
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">OUR STORY</span>
            <div className="w-16 h-0.5 bg-emerald-400 ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            About AIC Langalanga Church
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A vibrant community of faith where lives are transformed through God's grace and love
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'mission', label: 'Mission & Vision' },
            { id: 'history', label: 'Our History' },
            { id: 'beliefs', label: 'Our Beliefs' },
            { id: 'leadership', label: 'Leadership' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
          {/* Mission & Vision */}
          {activeTab === 'mission' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    To be a transformative faith community that impacts lives through the power of the Gospel, 
                    fosters spiritual growth, and serves our community with love and compassion. We strive to 
                    create a welcoming environment where everyone can experience God's grace and discover their purpose.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    To see individuals and families transformed by God's love, growing in faith and making a 
                    positive difference in our community and beyond. We envision a church where every member 
                    is empowered to live out their God-given calling and impact the world for Christ.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === 'history' && (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-slate-800/50 rounded-xl p-8 border border-slate-700/30">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-lg flex items-center justify-center mr-5">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Our Journey</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    AIC Langalanga Church began as a small gathering of faithful believers meeting in homes, 
                    united by a shared vision to spread God's word in our community. Through years of dedicated 
                    service and unwavering faith, our church has grown into a vibrant spiritual home for hundreds of families.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <h4 className="text-emerald-400 font-semibold mb-2">1895</h4>
                      <p className="text-slate-300">Church founded </p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <h4 className="text-emerald-400 font-semibold mb-2">2012</h4>
                      <p className="text-slate-300">Current Langalanga sanctuary building completed</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <h4 className="text-emerald-400 font-semibold mb-2">2023</h4>
                      <p className="text-slate-300">Choir ministry program launched</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <h4 className="text-emerald-400 font-semibold mb-2">2023</h4>
                      <p className="text-slate-300">Community outreach center established</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Beliefs */}
          {activeTab === 'beliefs' && (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-slate-800/50 rounded-xl p-8 border border-slate-700/30">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mr-5">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Our Core Beliefs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "The Trinity",
                      description: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.",
                      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    },
                    {
                      title: "Scripture",
                      description: "We believe the Bible is the inspired, authoritative Word of God and our guide for faith and life.",
                      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    },
                    {
                      title: "Salvation",
                      description: "We believe in salvation by grace through faith in Jesus Christ alone.",
                      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    },
                    {
                      title: "Community",
                      description: "We believe in the power of Christian community and the importance of fellowship.",
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    }
                  ].map((belief, index) => (
                    <div key={index} className="bg-slate-900/50 p-6 rounded-lg hover:bg-slate-900/70 transition-colors duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={belief.icon} />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{belief.title}</h3>
                      </div>
                      <p className="text-slate-300">{belief.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Leadership */}
          {activeTab === 'leadership' && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Leadership Team</h2>
              <p className="text-slate-300 mb-8">
                Meet the dedicated individuals who guide our church with wisdom and compassion
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                Meet Our Pastors
              </button>
            </div>
          )}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "15+", label: "Years Serving" },
            { number: "100+", label: "Members" },
            { number: "12", label: "Ministries" },
            { number: "100+", label: "Lives Changed" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage