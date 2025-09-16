import SocialLinks from './SocialLinks'

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">AIC Langalanga Church</h3>
            <p className="text-slate-400 mb-4">
              A transformative faith community dedicated to spiritual growth, fellowship, and service.
            </p>
            <SocialLinks />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'ministries', 'services', 'media'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => setCurrentPage(page)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="text-slate-400 not-italic">
              <p>A.I.C Langalanga, F9XC+CC</p>
              <p>Gilgil, Kenya</p>
              <p className="mt-2">Phone: +254 715577476</p>
              <p>Email: ‎aiclangalangagilgil@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} AIC Langalanga Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer