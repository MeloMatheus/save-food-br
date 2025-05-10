"use client"

import type React from "react"

// import { useState } from "react"
import Link from "next/link"
// import { motion } from "framer-motion"
// import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Footer() {
  // const [email, setEmail] = useState("")
  // const [subscribed, setSubscribed] = useState(false)

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   if (email) {
  //     // Em uma aplicação real, você enviaria isso para seu backend
  //     console.log("Inscrevendo e-mail:", email)
  //     setSubscribed(true)
  //     setEmail("")

  //     // Resetar o estado de inscrição após 5 segundos
  //     setTimeout(() => {
  //       setSubscribed(false)
  //     }, 5000)
  //   }
  // }

  return (
    <footer id="contact" className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold flex items-center mb-4">
               <Image src={Logo} alt={"FoodSaveBR Logo"} className="w-9 h-9 mr-2"/>
              <span>FoodSaveBR</span>
            </Link>
            <p className="text-green-100 mb-6">
              Trabalhando juntos para reduzir o desperdício de alimentos e combater a fome no Brasil.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-green-100 hover:text-white transition-colors duration-300">
                  Sobre o desperdício de alimentos
                </Link>
              </li>
              <li>
                <Link href="#mini-game" className="text-green-100 hover:text-white transition-colors duration-300">
                  Teste seus conhecimentos
                </Link>
              </li>
              <li>
                <Link href="#recipes" className="text-green-100 hover:text-white transition-colors duration-300">
                  Receitas que reduzem o desperdício
                </Link>
              </li>
              <li>
                <Link href="#food-banks" className="text-green-100 hover:text-white transition-colors duration-300">
                  Bancos de alimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100">
                  Av. Paulista, 1000
                  <br />
                  São Paulo, SP, Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100">+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-100">contato@foodsavebr.org</span>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-green-100 mb-4">
              Inscreva-se em nossa newsletter para receber dicas sobre como reduzir o desperdício de alimentos e
              atualizações sobre nossas iniciativas.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Seu endereço de e-mail"
                  className="px-4 py-2 bg-green-800 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-green-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors duration-300"
                >
                  Inscrever-se
                </button>
                {subscribed && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-300 text-sm">
                    Obrigado por se inscrever!
                  </motion.p>
                )}
              </div>
            </form>
          </div> */}
        </div>

        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FoodSaveBR. Todos os direitos reservados.
            </p>
            {/* <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-green-100 hover:text-white text-sm transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/terms-of-service"
                className="text-green-100 hover:text-white text-sm transition-colors duration-300"
              >
                Termos de Serviço
              </Link>
              <Link
                href="/cookie-policy"
                className="text-green-100 hover:text-white text-sm transition-colors duration-300"
              >
                Política de Cookies
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

