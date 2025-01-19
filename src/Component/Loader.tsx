import React from 'react'

export default function RotatingLogoLoader() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Blurred background image */}
      <img
        src="/backgound.jpg"
        alt="KBC Studio"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
       
        <div className="text-white  text-lg animate-pulse mb-4">
          Preparing your hot seat...
        </div>
        <div className="flex space-x-2 mb-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  )
}
