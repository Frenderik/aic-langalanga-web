import { useState } from 'react'
import VideoCard from '../components/VideoCard'

const MediaPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const videoData = [
    {
      title: "Easter Drama Presentation",
      description: "The Easter story presented through drama by our church members",
      date: "April 10, 2022",
      thumbnail: "https://images.unsplash.com/photo-1577219498110-87df9f9e70a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      videoId: "dQw4w9WgXcQ" // This would be replaced with actual video IDs
    }
  ]

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedVideo(null)
  }

  return (
    <div className="py-16 px-4 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-0.5 bg-emerald-400 mr-4"></div>
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">MEDIA GALLERY</span>
            <div className="w-16 h-0.5 bg-emerald-400 ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Church Media
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Watch inspiring performances, sermons, and meaningful moments from our church community
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videoData.map((video, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative transform transition-all duration-300 group-hover:scale-105">
                <VideoCard 
                  {...video} 
                  onPlay={() => handleVideoSelect(video)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Load More Videos
          </button>
        </div>

        {/* Video Modal */}
        {showModal && selectedVideo && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="relative bg-slate-800/90 rounded-2xl p-6 max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-slate-300 mb-4">{selectedVideo.description}</p>
                <p className="text-slate-400 text-sm">{selectedVideo.date}</p>
              </div>
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30 text-center">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Sermons</h3>
            <p className="text-slate-300">Watch inspiring messages from our pastors</p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Music & Worship</h3>
            <p className="text-slate-300">Experience powerful worship sessions</p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30 text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15m0 0a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Events</h3>
            <p className="text-slate-300">Relive special church events and celebrations</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaPage