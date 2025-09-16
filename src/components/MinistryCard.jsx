const MinistryCard = ({ title, description, leader, meetingTime, membersCount, image }) => {
  const isImagePath = typeof image === 'string' && (image.includes('.png') || image.includes('.jpg') || image.includes('.jpeg') || image.includes('.webp'))
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 card-hover h-full">
      {/* Image Section */}
      <div className="mb-4">
        {isImagePath ? (
          // Actual image
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        ) : image ? (
          // Placeholder text with gradient background
          <div className="w-full h-48 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white/70 font-semibold text-center px-4">{image}</span>
          </div>
        ) : (
          // Fallback icon
          <div className="w-full h-48 bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2-10h2m-2-6h2M7 21h10M7 21v-6a2 2 0 012-2h2a2 2 0 012 2v6M7 21H5m2-6h2m-2-6h2" />
            </svg>
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-2">
          <span className="text-white text-sm font-bold">L</span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Leader: {leader}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        {meetingTime && (
          <span className="text-sm text-slate-400 bg-slate-700/50 py-1 px-3 rounded-full">
            {meetingTime}
          </span>
        )}
        <span className="text-sm text-slate-400">
          {membersCount} members
        </span>
      </div>
    </div>
  )
}

export default MinistryCard