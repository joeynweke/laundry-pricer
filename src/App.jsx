import { useState } from 'react'
import { WashingMachine, Send, Moon, Sun } from 'lucide-react'

function App() {
  const [weight, setWeight] = useState('')
  const [type, setType] = useState('student')
  const [price, setPrice] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const calculatePrice = () => {
    const rates = { student: 400, corporate: 600, family: 500 }
    const total = weight ? Math.round(rates[type] * Number(weight) * 1.1) : 0
    setPrice(total)
  }

  const whatsappMessage = price
    ? `Hi! I want to drop laundry.\nWeight: ${weight}kg\nType: ${type}\nEstimated price: ₦${price.toLocaleString()}`
    : ''
  const whatsappLink = `https://wa.me/2349037279075?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} transition-all`}>
      <div className="container mx-auto px-4 py-8 max-w-md">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <WashingMachine className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold">Smart Laundry Pricer</h1>
          </div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
          </button>
        </div>

        {/* Main Card */}
        <div className={`rounded-2xl shadow-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="space-y-6">

            {/* Weight Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 5"
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:ring-4 focus:ring-indigo-500 text-lg`}
              />
            </div>

            {/* Customer Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Customer Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} focus:ring-4 focus:ring-indigo-500`}
              >
                <option value="student">Student (Cheapest)</option>
                <option value="corporate">Corporate</option>
                <option value="family">Family</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculatePrice}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg text-xl transition"
            >
              Calculate Price with AI
            </button>

            {/* Result */}
            {price !== null && (
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white text-center">
                <p className="text-sm opacity-90">Estimated Total</p>
                <p className="text-5xl font-bold mt-2">₦{price.toLocaleString()}</p>
                <p className="mt-3 text-sm">Ready in 24–48 hours</p>
              </div>
            )}

            {/* WhatsApp Button */}
            {price && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg text-center flex items-center justify-center gap-3 text-xl"
              >
                <Send className="w-6 h-6" />
                Place Order on WhatsApp
              </a>
            )}
          </div>
        </div>

        <p className="text-center mt-8 text-sm opacity-70">
          Built by Joseph Nweke – React + AI | Available for freelance
        </p>
      </div>
    </div>
  )
}

export default App