const ServiceOrder = ({ service }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
      <h3 className="text-xl font-semibold text-white mb-6 text-center">{service.title} Service Order</h3>
      
      <div className="space-y-4">
        {service.order.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center mr-4">
              <span className="text-white font-medium text-sm">{index + 1}</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">{item.activity}</h4>
              {item.leader && <p className="text-slate-400 text-sm">Led by {item.leader}</p>}
              {item.duration && <p className="text-slate-500 text-xs">{item.duration} minutes</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceOrder