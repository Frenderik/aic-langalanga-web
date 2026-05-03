import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MinistriesPage from './pages/MinistriesPage'
import ServicesPage from './pages/ServicesPage'
import MediaPage from './pages/MediaPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  // Toggle this to true when fundraising campaign is active, false when not
  const [showFundraising, setShowFundraising] = useState(true) // Set to false to hide fundraising

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} showFundraising={showFundraising} />
      case 'about':
        return <AboutPage />
      case 'ministries':
        return <MinistriesPage />
      case 'services':
        return <ServicesPage />
      case 'media':
        return <MediaPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} showFundraising={showFundraising} />
    }
  }

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} showFundraising={showFundraising} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App