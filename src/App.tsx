/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles,
  Cpu 
} from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 filter brightness-100"
        >
          <source 
            src="https://res.cloudinary.com/dpa4ocuzy/video/upload/v1781555437/Soldier_with_skull_mask_202606152113_qdzaxf.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 radial-glow pointer-events-none z-0" />
      <div className="absolute inset-0 radial-glow-cyan pointer-events-none z-0" />
      
      {/* Delicate Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Header Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-8 md:py-10 flex justify-between items-center shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center space-x-3 cursor-default"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <Cpu className="h-4 w-4 text-black stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              W入~RLORD
            </span>
            <span className="text-[9px] font-mono tracking-[4px] text-cyan-400 font-bold leading-none">
              RAIR
            </span>
          </div>
        </motion.div>
      </header>

      {/* Main Container - beautifully centered/spread layout */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col justify-center items-center py-12 md:py-20 text-center">
        
        <div className="max-w-4xl flex flex-col items-center space-y-8 md:space-y-10 mx-auto">
          
          {/* Subtle tag badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center space-x-2 w-max px-4 py-1.5 rounded-full bg-zinc-950/80 border border-cyan-500/20 backdrop-blur-sm"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400/90">
              Ecosystem Launchpad
            </span>
          </motion.div>

          {/* Heading with responsive display font */}
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="font-display font-black tracking-tight leading-[0.95] text-center flex flex-col items-center"
            >
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white whitespace-nowrap">
                Welcome To
              </span>
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mt-2">
                W入~RLORD
              </span>
            </motion.h1>

            {/* Découvrir Action Button under heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 flex justify-center"
            >
              <button 
                className="group relative cursor-pointer px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 focus:outline-none flex items-center space-x-2 w-max"
              >
                <span>Découvrir le clan</span>
                <Sparkles className="h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Beautiful humble copyright footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 text-center md:text-left shrink-0">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} W入~RLORD RAIR. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
