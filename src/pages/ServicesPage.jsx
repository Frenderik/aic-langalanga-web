import ServiceCard from '../components/ServiceCard'
import ServiceOrder from '../components/ServiceOrder'

const ServicesPage = () => {
  const services = [
    {
      title: "Sunday Main Service",
      time: "10:00 AM",
      description: "Join us for worship, prayer, and an inspiring message from God's Word.",
      leader: "Dr Christine Kithome| Pastor Mbugua"
    },
    {
      title: "Sunday School",
      time: "9:00 AM",
      description: "Bible study for all ages - children, youth, and adults.",
      leader: ""
    },
   
    {
      title: "Youth Fellowship",
      time: "4:00 PM",
      description: "Dynamic worship and relevant teaching for the youth and young adults.",
      leader: "Sophia Kairu"
    },
    {
      title: "Members Fellowship",
      time: "2:00 PM",
      description: "Every Thursday of the month for members of all ages. They attend fellowship based on their premises.",
      meetingDay: "Every Thursday"
    },
    {
      title: "Men's Breakfast",
      time: "8:00 AM",
      description: "Monthly gathering for men to connect over food and God's Word.",
      leader: "Lawrence Kariuki",
      meetingDay: "Every Sunday"
    }
  ]

  const serviceOrder = {
    title: "Sunday Main",
    order: [
      { activity: "Prelude & Welcome", leader: "Worship Leader", duration: 5 },
      { activity: "Opening Worship", leader: "Praise and Worship Team", duration: 20 },
      { activity: "Announcements", leader: "Church Secretary", duration: 5 },
      { activity: "Offering", leader: "Deacons", duration: 10 },
      { activity: "Special Music", leader: "Choir/Soloist", duration: 5 },
      { activity: "Sermon", leader: "Pastor John Maina", duration: 35 },
      { activity: "Altar Call & Prayer", leader: "Pastoral Team", duration: 10 },
      { activity: "Closing Worship", leader: "Congregation", duration: 5 },
      { activity: "Benediction", leader: "Pastor", duration: 2 }
    ]
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Church Services</h1>
        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
          Join us for worship, fellowship, and spiritual growth throughout the week
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ServiceOrder service={serviceOrder} />
        </div>
      </div>
    </div>
  )
}

export default ServicesPage