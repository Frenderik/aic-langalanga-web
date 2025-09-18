import SocialLinks from './SocialLinks'
import logo from '../assets/AIC-Logo.png'

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-600/90 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* Logo with lighter background for better visibility */}
            <div className="bg-white/25 p-2 rounded-lg backdrop-blur-sm border border-white/0">
              <img 
                src={logo} 
                alt="Aiclangalanga Church" 
                className="h-32 w-auto object-contain" // Adjusted size for better proportion
              />
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'ministries', label: 'Ministries' },
              { id: 'services', label: 'Services' },
              { id: 'media', label: 'Media' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`py-2 px-1 font-medium transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'text-emerald-400 border-b-2 border-emerald-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:block mt-4 md:mt-0">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header