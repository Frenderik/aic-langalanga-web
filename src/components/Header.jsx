import { useState } from 'react'
import SocialLinks from './SocialLinks'
import logo from '../assets/AIC-Logo.png'

const Header = ({ currentPage, setCurrentPage, showFundraising = false }) => {
  const [showOfferingModal, setShowOfferingModal] = useState(false)
  const [showFundraisingModal, setShowFundraisingModal] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-600/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white/25 p-2 rounded-lg backdrop-blur-sm border border-white/0">
                <img 
                  src={logo} 
                  alt="Aiclangalanga Church" 
                  className="h-32 w-auto object-contain"
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
              <button
                onClick={() => setShowOfferingModal(true)}
                className="py-2 px-4 font-medium transition-all duration-300 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full hover:from-emerald-600 hover:to-cyan-600 shadow-lg"
              >
                Give Offerings
              </button>
              {showFundraising && (
                <button
                  onClick={() => setShowFundraisingModal(true)}
                  className="py-2 px-4 font-medium transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 shadow-lg"
                >
                  Support Fundraising
                </button>
              )}
            </nav>
            
            <div className="hidden md:block mt-4 md:mt-0">
              <SocialLinks />
            </div>
          </div>
        </div>
      </header>

    

      {/* OFFERINGS MODAL - Clean and Elegant Design */}
      {showOfferingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-3xl w-full my-8 border border-slate-700 shadow-2xl relative animate-fadeIn">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 rounded-t-2xl"></div>
            
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-cyan-600 p-5 flex justify-between items-center rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-white">Give Offerings & Tithes</h2>
                <p className="text-emerald-100 text-sm mt-1">Support the ongoing ministry</p>
              </div>
              <button
                onClick={() => setShowOfferingModal(false)}
                className="text-white hover:text-slate-200 text-3xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Scripture */}
              <div className="bg-emerald-500/5 rounded-xl p-4 border-l-4 border-emerald-400">
                <p className="text-slate-300 leading-relaxed text-sm italic">
                  "Honor the Lord with your wealth, with the firstfruits of all your crops."
                  <span className="text-slate-400 block text-xs mt-1">— Proverbs 3:9</span>
                </p>
              </div>

              {/* M-Pesa Section */}
              <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/30 transition-all duration-300">
                <div className="bg-emerald-500/10 p-4 border-b border-slate-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-emerald-400">M-Pesa Paybill</h3>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Recommended</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">Fast, secure, and available 24/7</p>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">Paybill Number</p>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 font-mono text-2xl font-bold tracking-wider">303030</span>
                        <button 
                          onClick={() => navigator.clipboard.writeText('303030')}
                          className="text-xs bg-slate-700 hover:bg-emerald-500/20 px-2 py-1 rounded transition text-slate-300 hover:text-emerald-400"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">Account Number</p>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 font-mono text-xl font-bold">2052368726</span>
                        <button 
                          onClick={() => navigator.clipboard.writeText('2052368726')}
                          className="text-xs bg-slate-700 hover:bg-emerald-500/20 px-2 py-1 rounded transition text-slate-300 hover:text-emerald-400"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ABSA Bank */}
                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="bg-cyan-500/10 p-3 border-b border-slate-700">
                    <h3 className="font-bold text-cyan-400">ABSA Bank</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    <div>
                      <p className="text-slate-400 text-xs">Paybill</p>
                      <p className="text-cyan-400 font-mono font-bold">303030</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Account</p>
                      <p className="text-cyan-400 font-mono font-bold">2052368726</p>
                    </div>
                  </div>
                </div>

                {/* Equity Bank */}
                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="bg-cyan-500/10 p-3 border-b border-slate-700">
                    <h3 className="font-bold text-cyan-400">Equity Bank</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    <div>
                      <p className="text-slate-400 text-xs">Paybill</p>
                      <p className="text-cyan-400 font-mono font-bold">247247</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Account</p>
                      <p className="text-cyan-400 font-mono font-bold">390581</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-slate-300 text-sm font-semibold mb-2">How to give via M-Pesa:</h4>
                <ol className="text-slate-400 text-xs space-y-1 list-decimal list-inside">
                  <li>Go to M-Pesa menu on your phone</li>
                  <li>Select "Lipa Na M-Pesa" then "Pay Bill"</li>
                  <li>Enter Business Number: <span className="text-emerald-400 font-mono">303030</span></li>
                  <li>Enter Account Number: <span className="text-emerald-400 font-mono">2052368726</span></li>
                  <li>Enter amount and your M-Pesa PIN</li>
                  <li>Confirm and you'll receive a confirmation SMS</li>
                </ol>
              </div>

              {/* Footer note */}
              <div className="text-center">
                <p className="text-slate-500 text-xs">Thank you for supporting AIC Langalanga Church</p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 p-4 rounded-b-2xl">
              <button
                onClick={() => setShowOfferingModal(false)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FUNDRAISING MODAL - Warm and Inspiring Design */}
      {showFundraisingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-3xl w-full my-8 border border-amber-500/30 shadow-2xl relative animate-fadeIn">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 rounded-t-2xl"></div>
            
            <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-orange-600 p-5 flex justify-between items-center rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-white">Support Church Development</h2>
                <p className="text-amber-100 text-sm mt-1">Building our future together</p>
              </div>
              <button
                onClick={() => setShowFundraisingModal(false)}
                className="text-white hover:text-slate-200 text-3xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Campaign Message */}
              <div className="bg-amber-500/5 rounded-xl p-4 border-l-4 border-amber-400">
                <p className="text-slate-300 leading-relaxed text-sm italic">
                  "Build houses and settle down; plant gardens and eat what they produce."
                  <span className="text-slate-400 block text-xs mt-1">— Jeremiah 29:5</span>
                </p>
              </div>

              {/* Campaign Details */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-5 border border-amber-500/20">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Building Fund Campaign</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We are raising funds for church facility expansion and renovation. 
                  Your contribution will help create a better worship space and 
                  children's ministry center for our growing congregation.
                </p>
              </div>

              {/* M-Pesa Section */}
              <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <div className="bg-amber-500/10 p-4 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-amber-400">Quick Give via M-Pesa</h3>
                  <p className="text-slate-400 text-xs mt-1">Fastest way to support the campaign</p>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-900 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">Paybill Number</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-mono text-2xl font-bold tracking-wider">303030</span>
                        <button 
                          onClick={() => navigator.clipboard.writeText('303030')}
                          className="text-xs bg-slate-700 hover:bg-amber-500/20 px-2 py-1 rounded transition text-slate-300 hover:text-amber-400"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">Account Number</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-mono text-xl font-bold">2052368726</span>
                        <button 
                          onClick={() => navigator.clipboard.writeText('2052368726')}
                          className="text-xs bg-slate-700 hover:bg-amber-500/20 px-2 py-1 rounded transition text-slate-300 hover:text-amber-400"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reference Note */}
                  <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
                    <p className="text-amber-400 text-xs font-semibold mb-1">Important:</p>
                    <p className="text-slate-300 text-sm">Add reference: <span className="font-mono bg-black/30 px-2 py-0.5 rounded text-amber-400 font-bold">FUNDRAISING</span></p>
                  </div>
                </div>
              </div>

              {/* Bank Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">ABSA Bank</h4>
                  <p className="text-slate-400 text-xs">Paybill: <span className="text-cyan-400 font-mono">303030</span></p>
                  <p className="text-slate-400 text-xs">Account: <span className="text-cyan-400 font-mono">2052368726</span></p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">Equity Bank</h4>
                  <p className="text-slate-400 text-xs">Paybill: <span className="text-cyan-400 font-mono">247247</span></p>
                  <p className="text-slate-400 text-xs">Account: <span className="text-cyan-400 font-mono">390581</span></p>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-slate-300 text-sm font-semibold mb-2">How to contribute:</h4>
                <ol className="text-slate-400 text-xs space-y-1 list-decimal list-inside">
                  <li>Use M-Pesa Paybill <span className="text-amber-400 font-mono">303030</span></li>
                  <li>Enter Account <span className="text-amber-400 font-mono">2052368726</span></li>
                  <li>Add reference: <span className="text-amber-400 font-mono">FUNDRAISING</span></li>
                  <li>Enter amount and complete transaction</li>
                  <li>For bank transfers, use the details above with the same reference</li>
                </ol>
              </div>

              {/* Footer note */}
              <div className="text-center">
                <p className="text-amber-400/60 text-xs">Every contribution, no matter the size, brings us closer to our goal</p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 p-4 rounded-b-2xl">
              <button
                onClick={() => setShowFundraisingModal(false)}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  )
}

export default Header