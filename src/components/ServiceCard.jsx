const ServiceCard = ({ title, time, description, leader }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded-full">
          {time}
        </span>
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mr-3">
          <span className="text-white font-bold">L</span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Led by {leader}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard