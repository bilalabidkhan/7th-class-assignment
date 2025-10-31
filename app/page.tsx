"use client"
import React, { useState } from 'react'

const BirthDayWish = () => {
  const [name, setName] = useState("");
  const [showWish, setShowWish] = useState(false);

  const handleShowWish = () => {
    if (name.trim()) setShowWish(true);    
  };

  const reset = () => {
    setName("");
    setShowWish(false);
  }

  return (
    <div className="w-full relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 animate-gradient bg-[length:400%_400%]" />

      {/* Floating Emojis (Balloons + Confetti) */}
      <div className="absolute inset-0 overflow-hidden">
        {["🎈", "🎉", "🎂", "🎊", "💖", "🎁"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl sm:text-3xl md:text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Sparkle Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {!showWish ? (
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-6 sm:p-8 rounded-3xl shadow-2xl animate-fadeIn">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-pink-600 mb-5 drop-shadow-lg">
              🎂 BirthDay Wisher 🎉
            </h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type Your Name..."
              className="w-full px-4 py-2 sm:py-3 rounded-lg text-center text-lg sm:text-xl border border-pink-200 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-pink-400 mb-5"
            />
            <button
              onClick={handleShowWish}
              className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:opacity-90 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg transition-all w-full sm:w-auto"
            >
              Show Wish
            </button>
          </div>
        ) : (
          <div className="animate-popIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-fuchsia-600 drop-shadow-[0_0_30px_rgba(255,150,200,0.9)] animate-glowStrong mb-4 sm:mb-6">
             🎉 Happy Birthday, {name}! 🎂
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-lg mx-auto mb-6 sm:mb-8">
              Wishing you a day full of love, joy, and sparkles! 💖
            </p>
            <div className="flex justify-center gap-3 text-2xl sm:text-3xl md:text-4xl animate-bounceSlow mb-6 sm:mb-8">
              <span>🎁</span>
              <span>🎂</span>
              <span>🎉</span>
              <span>💐</span>
              <span>💖</span>
              <span>🎈</span>
            </div>
            <button
              onClick={reset}
              className="bg-white/20 hover:bg-white/40 text-white px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base shadow-md transition-all"
            >
              Make Another Wish ✨
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BirthDayWish