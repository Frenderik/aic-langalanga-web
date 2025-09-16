const VideoCard = ({ title, description, date, thumbnail, videoId, onPlay }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 card-hover">
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={onPlay}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-2">{description}</p>
        <p className="text-slate-400 text-xs">{date}</p>
      </div>
    </div>
  )
}

export default VideoCard