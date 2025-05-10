"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AboutIllustration from "@/public/images/about-illustration.png"
import AbautIcon1 from "@/public/images/about-icon-1.png"
import AbautIcon2 from "@/public/images/about-icon-2.png"
import AbautIcon3 from "@/public/images/about-icon-3.png"
import AbautIcon4 from "@/public/images/about-icon-4.png"

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      value: "1.3B",
      label: "Toneladas de alimentos desperdiçados globalmente a cada ano",
      image: AbautIcon1,
    },
    {
      value: "30%",
      label: "De todos os alimentos produzidos são desperdiçados no Brasil",
      image: AbautIcon2,
    },
    { value: "821M", label: "Pessoas sofrem com a fome em todo o mundo",
      image: AbautIcon3,
     },
    {
      value: "R$61B",
      label: "Perda econômica anual com o desperdício de alimentos no Brasil",
      image: AbautIcon4,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Crise do Desperdício de Alimentos
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            O desperdício de alimentos é um problema global com impactos
            ambientais, econômicos e sociais significativos. No Brasil, o
            problema é particularmente grave, com milhões de toneladas de
            alimentos sendo desperdiçados enquanto muitos cidadãos enfrentam
            insegurança alimentar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={AboutIllustration}
              alt="Ilustração de desperdício de alimentos"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Por Que Devemos Nos Importar?
            </h3>
            <p className="text-gray-700">
              Quando desperdiçamos alimentos, também desperdiçamos todos os
              recursos que foram usados para produzi-los - água, terra, energia,
              trabalho e capital. O desperdício de alimentos também gera
              emissões de gases de efeito estufa, contribuindo para as mudanças
              climáticas.
            </p>
            <p className="text-gray-700">
              No Brasil, aproximadamente 30% de todos os alimentos produzidos
              são desperdiçados, enquanto milhões de brasileiros enfrentam
              insegurança alimentar. Ao reduzir o desperdício de alimentos,
              podemos ajudar a combater a fome, reduzir o impacto ambiental e
              economizar dinheiro.
            </p>
            <div className="pt-4">
              <a
                href="#mini-game"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Teste seus conhecimentos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col bg-white p-6 rounded-lg shadow-md text-center items-center"
            >
              <Image src={stat.image} alt="Icon illustration" className="h-14 w-14 mb-2"></Image>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nossa Missão
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Nosso objetivo é conscientizar sobre o desperdício de alimentos no
            Brasil, fornecer soluções práticas para reduzir o desperdício em
            casa e conectar pessoas com bancos de alimentos e organizações que
            trabalham para redistribuir alimentos excedentes para quem precisa.
          </p>
          <a
            href="#recipes"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-700 transition-colors duration-300"
          >
            Descubra Receitas que Reduzem o Desperdício
          </a>
        </motion.div>
      </div>
    </section>
  );
}
