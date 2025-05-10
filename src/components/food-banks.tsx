"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import FoodBank1 from "@/public/images/food-bank-1.png"
import FoodBank2 from "@/public/images/food-bank-2.png"
import FoodBank3 from "@/public/images/food-bank-3.png"
import FoodBank5 from "@/public/images/food-bank-5.png"
import FoodBank6 from "@/public/images/food-bank-6.png"

type FoodBank = {
  name: string;
  location: string;
  website: string;
  description: string;
  image: StaticImport;
  tags: string[];
};

export default function FoodBanks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const foodBanks: FoodBank[] = [
    {
      name: "Banco de alimentos de São Paulo",
      location: "São Paulo, SP",
      website: "https://www.bancodealimentos.org.br",
      description:
        "O banco de alimentos de São Paulo coleta alimentos excedentes de empresas e os distribui para organizações sociais que atendem pessoas em situação de vulnerabilidade.",
      image: FoodBank1,
      tags: ["southeast", "donations", "volunteer"],
    },
    {
      name: "Mesa Brasil SESC",
      location: "Múltiplas localidades em todo o Brasil",
      website: "https://www.sesc.com.br/mesabrasil",
      description:
        "Uma rede nacional de bancos de alimentos que coleta alimentos excedentes e os distribui para instituições sociais em todo o Brasil.",
      image: FoodBank2,
      tags: ["nationwide", "donations", "education"],
    },
    {
      name: "Banco de alimentos do Rio Grande do Sul",
      location: "Porto Alegre, RS",
      website: "https://www.bancodealimentosrs.org.br",
      description:
        "Coleta, seleciona e distribui alimentos para entidades beneficentes cadastradas no Rio Grande do Sul.",
      image: FoodBank3,
      tags: ["south", "donations", "volunteer"],
    },
    {
      name: "Amigos do Bem",
      location: "Múltiplas localidades no Nordeste do Brasil",
      website: "https://www.amigosdobem.org",
      description:
        "Fornece alimentos, água, educação e assistência médica para comunidades no sertão brasileiro.",
      image: FoodBank5,
      tags: ["northeast", "donations", "volunteer", "education"],
    },
    {
      name: "Ação da Cidadania",
      location: "Rio de Janeiro, RJ",
      website: "https://www.acaodacidadania.org.br",
      description:
        "Uma das maiores organizações da sociedade civil do Brasil que combate a fome e promove a segurança alimentar.",
      image: FoodBank6,
      tags: ["southeast", "donations", "volunteer"],
    },
  ];

  const regions = [
    { value: "all", label: "Todas as Regiões" },
    { value: "southeast", label: "Sudeste" },
    { value: "south", label: "Sul" },
    { value: "northeast", label: "Nordeste" },
    { value: "north", label: "Norte" },
    { value: "central-west", label: "Centro-Oeste" },
    { value: "nationwide", label: "Nacional" },
  ];

  const filteredFoodBanks = foodBanks.filter((foodBank) => {
    const matchesSearch =
      foodBank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      foodBank.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      foodBank.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "all" || foodBank.tags.includes(selectedRegion);

    return matchesSearch && matchesRegion;
  });

  return (
    <section id="food-banks" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bancos de alimentos no Brasil
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Conecte-se com bancos de alimentos e organizações que trabalham para
            reduzir o desperdício de alimentos e a fome no Brasil. Essas
            organizações aceitam doações de alimentos e frequentemente precisam
            de voluntários.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Pesquisar por nome, localização ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>

          {filteredFoodBanks.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFoodBanks.map((foodBank, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <Image
                        className="h-48 w-90 object-cover md:w-48"
                        src={foodBank.image}
                        alt={foodBank.name}
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-1">
                        {foodBank.location}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {foodBank.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {foodBank.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {foodBank.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={foodBank.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium flex items-center"
                      >
                        Visitar Website
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md">
              <p className="text-gray-600">
                Nenhum banco de alimentos encontrado com os critérios de
                pesquisa.
              </p>
              <button
                className="mt-4 text-green-600 hover:text-green-800 font-medium"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedRegion("all");
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-green-50 p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer fazer a diferença?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Existem muitas maneiras de ajudar a reduzir o desperdício de
            alimentos e combater a fome no Brasil. Doe alimentos, ofereça seu
            tempo como voluntário ou apoie essas organizações financeiramente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#food-banks"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-700 transition-colors duration-300"
            >
              Envolva-se
            </a>
            <a
              href="#"
              className="bg-white border border-green-600 text-green-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-green-50 transition-colors duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
