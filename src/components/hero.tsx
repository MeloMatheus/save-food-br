"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import HeroBackground from "@/public/images/hero-background.png"

export default function Hero() {

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-600/70 z-10" />
        <Image 
          src={HeroBackground}
          alt="Fundo de desperdício de alimentos"
          className="w-full h-full object-cover"/>
      </div>

      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Reduzindo o desperdício de alimentos
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Juntos podemos fazer a diferença reduzindo o desperdício de alimentos e ajudando quem precisa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Saiba Mais
            </motion.a>
            <motion.a
              href="#food-banks"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-colors duration-300"
            >
              Encontrar Bancos de Alimentos
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <a href="#about" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

