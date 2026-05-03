import { useState } from 'react'
import SocialLinks from './SocialLinks'

const Footer = ({ setCurrentPage }) => {
  const [showOfferingModal, setShowOfferingModal] = useState(false)

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                AIC Langalanga Church
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                A transformative faith community dedicated to spiritual growth, fellowship, and service.
              </p>
              <SocialLinks />
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['home', 'about', 'ministries', 'services', 'media', 'contact'].map((page) => (
                  <li key={page}>
                    <button 
                      onClick={() => setCurrentPage(page)}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support the Ministry</h4>
              <button
                onClick={() => setShowOfferingModal(true)}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg mb-4"
              >
                Give Your Offering
              </button>
              <div className="space-y-2 text-sm">
                <p className="text-slate-400">M-Pesa Paybill: <span className="text-emerald-400 font-mono font-bold">303030</span></p>
                <p className="text-slate-400">Account: <span className="text-emerald-400 font-mono font-bold">2052368726</span></p>
                <div className="border-t border-slate-800 pt-2 mt-2">
                  <p className="text-slate-500 text-xs">Equity Bank: Paybill <span className="font-mono">247247</span></p>
                  <p className="text-slate-500 text-xs">Account <span className="font-mono">390581</span></p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
              <address className="text-slate-400 not-italic space-y-2">
                <p>A.I.C Langalanga, F9XC+CC</p>
                <p>Gilgil, Kenya</p>
                <p className="pt-2">📞 +254 715577476</p>
                <p>✉️ aiclangalangagilgil3@gmail.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AIC Langalanga Church. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-2">
              "Growing in faith, serving in love"
            </p>
          </div>
        </div>
      </footer>

      {/* Offering Modal - Same design as Header */}
      {showOfferingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-3xl w-full my-8 border border-slate-700 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded-t-2xl"></div>
            
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-cyan-600 p-5 flex justify-between items-center rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold text-white">Give With a Joyful Heart</h2>
                <p className="text-emerald-100 text-sm mt-1">Your generosity transforms lives</p>
              </div>
              <button
                onClick={() => setShowOfferingModal(false)}
                className="text-white hover:text-slate-200 text-3xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-5 border border-emerald-500/20 text-center">
                <p className="text-slate-200 leading-relaxed">
                  "Each of you should give what you have decided in your heart to give, 
                  not reluctantly or under compulsion, for God loves a cheerful giver." 
                  — 2 Corinthians 9:7
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/30 transition-all">
                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-4 border-b border-slate-700">
                  <h3 className="text-xl font-bold text-emerald-400">Weekly Offerings & Tithes</h3>
                  <p className="text-slate-400 text-sm">Support the ongoing ministry of AIC Langalanga Church</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4 hover:bg-slate-900/80 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-white text-lg">M-Pesa Paybill</h4>
                        <p className="text-slate-400 text-sm">Available 24/7 for your convenience</p>
                      </div>
                      <div className="bg-emerald-500/20 px-3 py-1 rounded-full">
                        <p className="text-emerald-400 text-xs font-semibold">Recommended</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Paybill Number:</span>
                        <span className="text-emerald-400 font-mono text-xl font-bold tracking-wider">303030</span>
                        <button 
                          onClick={() => navigator.clipboard.writeText('303030')}
                          className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded transition"
                        >
                          Copy
                        </button>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Account Number:</span>
                        <span className="text-emerald-400 font-mono text-lg font-bold">2052368726</span>
                        <button 
                          onClick={() => navigator.clipboard.writeText('2052368726')}
                          className="text-xs bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded transition"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700">
                      <p className="text-slate-400 text-sm">How to give via M-Pesa:</p>
                      <ol className="text-slate-400 text-sm list-decimal list-inside space-y-1 mt-2">
                        <li>Open your SIM toolkit and select M-Pesa</li>
                        <li>Choose "Lipa Na M-Pesa" then "Pay Bill"</li>
                        <li>Enter Business Number <span className="text-emerald-400">303030</span></li>
                        <li>Enter Account Number <span className="text-emerald-400">2052368726</span></li>
                        <li>Enter the amount you wish to give</li>
                        <li>Enter your M-Pesa PIN and confirm</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4">
                    <h4 className="font-bold text-white text-lg mb-3">Bank Deposit - ABSA Bank</h4>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Bank Name:</span>
                        <span className="text-cyan-400 font-semibold">ABSA Bank Kenya</span>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Paybill:</span>
                        <span className="text-cyan-400 font-mono text-lg font-bold">303030</span>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Account:</span>
                        <span className="text-cyan-400 font-mono text-lg font-bold">2052368726</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/30 transition-all">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 border-b border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400">Bank Transfer Options</h3>
                  <p className="text-slate-400 text-sm">Direct deposits from any bank branch</p>
                </div>
                <div className="p-5">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <h4 className="font-bold text-white text-lg mb-3">Equity Bank Kenya</h4>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Paybill Number:</span>
                        <span className="text-cyan-400 font-mono text-lg font-bold">247247</span>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-slate-400 w-28">Account Number:</span>
                        <span className="text-cyan-400 font-mono text-lg font-bold">390581</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-5 border border-purple-500/20">
                <h4 className="font-bold text-purple-400 text-center mb-3">Quick Reference Guide</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-900/50 rounded p-3">
                    <p className="text-slate-400">Regular Offerings</p>
                    <p className="text-emerald-400 font-mono">Paybill: 303030</p>
                    <p className="text-emerald-400 font-mono">Account: 2052368726</p>
                  </div>
                  <div className="bg-slate-900/50 rounded p-3">
                    <p className="text-slate-400">Equity Bank</p>
                    <p className="text-cyan-400 font-mono">Paybill: 247247</p>
                    <p className="text-cyan-400 font-mono">Account: 390581</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 p-4 rounded-b-2xl flex gap-3">
              <button
                onClick={() => setShowOfferingModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer