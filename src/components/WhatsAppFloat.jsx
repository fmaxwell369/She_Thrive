import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppFloat = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/+237650690059?text=Hello%20SHE%20Thrive%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span
        className={`bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-300 transition-all duration-300 hover:scale-110">
        <MessageCircle size={26} className="text-white fill-white" />
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full border-2 border-green-400 animate-ping opacity-60" />
      </div>
    </a>
  )
}

export default WhatsAppFloat
