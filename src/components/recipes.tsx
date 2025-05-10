"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tab } from "@/components/ui/tab"
import { Tabs, TabsList, TabsContent } from "@/components/ui/tabs"
import { Clock, Award, X } from "lucide-react"
import Image from "next/image"
import VegetableScraps from "@/public/images/vegetable-broth.png"
import CarrotTopPesto from "@/public/images/carrot-top-pesto.png"
import BananaBread from "@/public/images/banana-bread.png"
import FruitSmoothe from "@/public/images/fruit-smoothie.png"
import BreadPudim from "@/public/images/bread-pudding.png"
import HomemadeCroutons from "@/public/images/homemade-croutons.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

type Recipe = {
  title: string
  description: string
  ingredients: string[]
  instructions: string[]
  image: StaticImport
  prepTime: string
  difficulty: string
}

export default function Recipes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("vegetable-scraps")

  const recipes: Record<string, Recipe[]> = {
    "vegetable-scraps": [
      {
        title: "Caldo de restos de vegetais",
        description:
          "Transforme restos de vegetais em um caldo saboroso que pode ser usado como base para sopas, ensopados e molhos.",
        ingredients: [
          "Restos de vegetais (cascas de cenoura, pontas de cebola, folhas de aipo, etc.)",
          "2 folhas de louro",
          "1 colher de chá de pimenta em grãos",
          "2 dentes de alho",
          "1 colher de sopa de azeite de oliva",
          "Sal a gosto",
          "8 xícaras de água",
        ],
        instructions: [
          "Colete restos de vegetais em um recipiente no seu freezer até ter cerca de 4 xícaras.",
          "Aqueça o azeite em uma panela grande em fogo médio.",
          "Adicione os restos de vegetais, folhas de louro, pimenta em grãos e alho.",
          "Refogue por 5 minutos, mexendo ocasionalmente.",
          "Adicione água e deixe ferver.",
          "Reduza o fogo e cozinhe em fogo baixo por 1 hora.",
          "Coe o caldo e descarte os sólidos.",
          "Use imediatamente ou armazene na geladeira por até 5 dias, ou congele por até 3 meses.",
        ],
        image: VegetableScraps,
        prepTime: "1 hora e 15 minutos",
        difficulty: "Fácil",
      },
      {
        title: "Pesto de folhas de cenoura",
        description:
          "Não jogue fora as folhas de cenoura! Transforme-as em um delicioso pesto perfeito para massas, sanduíches ou como um molho para mergulhar.",
        ingredients: [
          "2 xícaras de folhas de cenoura, lavadas e secas",
          "1/2 xícara de folhas de manjericão",
          "1/3 xícara de pinhões ou nozes",
          "2 dentes de alho",
          "1/2 xícara de queijo parmesão ralado",
          "1/2 xícara de azeite de oliva",
          "Sal e pimenta a gosto",
          "1 colher de sopa de suco de limão",
        ],
        instructions: [
          "Torre as nozes em uma frigideira seca até ficarem perfumadas, cerca de 3-5 minutos. Deixe esfriar.",
          "Em um processador de alimentos, combine as folhas de cenoura, manjericão, nozes e alho. Pulse até ficar grosseiramente picado.",
          "Adicione o queijo parmesão e pulse para combinar.",
          "Com o processador ligado, adicione lentamente o azeite até atingir a consistência desejada.",
          "Adicione o suco de limão, sal e pimenta a gosto.",
          "Armazene em um recipiente hermético na geladeira por até 1 semana, ou congele em formas de gelo por até 3 meses.",
        ],
        image: CarrotTopPesto,
        prepTime: "15 minutos",
        difficulty: "Fácil",
      },
    ],
    "overripe-fruits": [
      {
        title: "Pão de banana",
        description:
          "A maneira perfeita de usar bananas muito maduras. Este pão de banana úmido e delicioso é um clássico favorito.",
        ingredients: [
          "3 bananas muito maduras, amassadas",
          "1/3 xícara de manteiga derretida",
          "1 colher de chá de bicarbonato de sódio",
          "Pitada de sal",
          "3/4 xícara de açúcar",
          "1 ovo grande, batido",
          "1 colher de chá de extrato de baunilha",
          "1 1/2 xícara de farinha de trigo",
        ],
        instructions: [
          "Pré-aqueça o forno a 175°C. Unte uma forma de pão de 10x20 cm.",
          "Em uma tigela, amasse as bananas maduras com um garfo até ficar homogêneo.",
          "Misture a manteiga derretida nas bananas amassadas.",
          "Misture o bicarbonato de sódio e o sal.",
          "Adicione o açúcar, o ovo batido e o extrato de baunilha.",
          "Misture a farinha.",
          "Despeje a massa na forma preparada.",
          "Asse por 50-60 minutos, ou até que um palito inserido no centro saia limpo.",
          "Retire do forno e deixe esfriar na forma por 10 minutos.",
          "Retire da forma e deixe esfriar completamente em uma grade.",
        ],
        image: BananaBread,
        prepTime: "1 hora e 15 minutos",
        difficulty: "Fácil",
      },
      {
        title: "Smoothie de frutas",
        description:
          "Uma maneira rápida e fácil de usar frutas muito maduras. Este smoothie é personalizável e perfeito para o café da manhã ou um lanche.",
        ingredients: [
          "2 bananas muito maduras",
          "1 xícara de frutas vermelhas mistas (frescas ou congeladas)",
          "1/2 xícara de iogurte",
          "1/2 xícara de leite ou alternativa vegetal",
          "1 colher de sopa de mel ou xarope de bordo (opcional)",
          "1/2 colher de chá de extrato de baunilha",
          "Cubos de gelo (opcional)",
        ],
        instructions: [
          "Adicione todos os ingredientes a um liquidificador.",
          "Bata até ficar homogêneo e cremoso.",
          "Adicione mais líquido se o smoothie estiver muito espesso.",
          "Despeje em copos e sirva imediatamente.",
        ],
        image: FruitSmoothe,
        prepTime: "5 minutos",
        difficulty: "Muito Fácil",
      },
    ],
    "stale-bread": [
      {
        title: "Pudim de pão",
        description: "Uma sobremesa deliciosa que transforma pão amanhecido em uma guloseima doce e cremosa.",
        ingredients: [
          "6 xícaras de pão amanhecido, em cubos",
          "2 xícaras de leite",
          "1/4 xícara de manteiga",
          "1/2 xícara de açúcar",
          "2 ovos, batidos",
          "1 colher de sopa de extrato de baunilha",
          "1 colher de chá de canela",
          "1/4 colher de chá de noz-moscada",
          "1/2 xícara de uvas passas (opcional)",
        ],
        instructions: [
          "Pré-aqueça o forno a 175°C. Unte uma forma de 23x33 cm.",
          "Em uma tigela grande, coloque os cubos de pão.",
          "Em uma panela, aqueça o leite e a manteiga até a manteiga derreter.",
          "Despeje sobre os cubos de pão e deixe de molho por 10 minutos.",
          "Em outra tigela, misture o açúcar, os ovos, a baunilha, a canela e a noz-moscada.",
          "Adicione à mistura de pão e mexa suavemente para combinar.",
          "Adicione as uvas passas, se estiver usando.",
          "Despeje na forma preparada.",
          "Asse por 45 minutos, ou até que a parte superior fique levemente dourada quando tocada.",
          "Sirva quente com um fio de calda de caramelo ou uma bola de sorvete.",
        ],
        image: BreadPudim,
        prepTime: "1 hora",
        difficulty: "Médio",
      },
      {
        title: "Croutons caseiros",
        description: "Transforme pão amanhecido em croutons crocantes perfeitos para saladas e sopas.",
        ingredients: [
          "4 xícaras de pão amanhecido, em cubos",
          "1/4 xícara de azeite de oliva",
          "2 dentes de alho, picados",
          "1 colher de chá de ervas secas (orégano, manjericão, tomilho)",
          "1/2 colher de chá de sal",
          "1/4 colher de chá de pimenta preta",
        ],
        instructions: [
          "Pré-aqueça o forno a 190°C.",
          "Em uma tigela grande, combine o azeite, o alho, as ervas, o sal e a pimenta.",
          "Adicione os cubos de pão e misture até ficarem uniformemente cobertos.",
          "Espalhe em uma única camada em uma assadeira.",
          "Asse por 10-15 minutos, mexendo na metade do tempo, até ficarem dourados e crocantes.",
          "Deixe esfriar completamente antes de armazenar em um recipiente hermético por até 2 semanas.",
        ],
        image: HomemadeCroutons,
        prepTime: "25 minutos",
        difficulty: "Fácil",
      },
    ],
  }

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Receitas que reduzem o desperdício</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Transforme restos de alimentos e itens que normalmente seriam jogados fora em refeições e lanches
            deliciosos. Estas receitas ajudam a reduzir o desperdício enquanto economizam dinheiro e criam pratos
            saborosos.
          </p>
        </motion.div>

        <Tabs defaultValue="vegetable-scraps" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <Tab
              value="vegetable-scraps"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              onClick={() => setActiveTab("vegetable-scraps")}
            >
              Restos de Vegetais
            </Tab>
            <Tab
              value="overripe-fruits"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              onClick={() => setActiveTab("overripe-fruits")}
            >
              Frutas Muito Maduras
            </Tab>
            <Tab
              value="stale-bread"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              onClick={() => setActiveTab("stale-bread")}
            >
              Pão Amanhecido
            </Tab>
          </TabsList>

          {Object.keys(recipes).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {recipes[category].map((recipe, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={activeTab === category ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        className="w-full h-full object-cover"
                        src={recipe.image}
                        alt={recipe.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 flex items-center space-x-2">
                        <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Clock className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-gray-800 font-medium">{recipe.prepTime}</span>
                        </div>
                        <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Award className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-gray-800 font-medium">{recipe.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                      <button
                        className="text-green-600 hover:text-green-800 font-medium flex items-center"
                        onClick={() => {
                          const modal = document.getElementById(`recipe-modal-${category}-${index}`)
                          if (modal) {
                            modal.classList.remove("hidden")
                          }
                        }}
                      >
                        Ver receita completa
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Recipe Modal */}
                    <div
                      id={`recipe-modal-${category}-${index}`}
                      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden"
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          e.currentTarget.classList.add("hidden")
                        }
                      }}
                    >
                      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 m-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{recipe.title}</h3>
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => {
                              const modal = document.getElementById(`recipe-modal-${category}-${index}`)
                              if (modal) {
                                modal.classList.add("hidden")
                              }
                            }}
                          >
                            <X className="h-6 w-6" />
                          </button>
                        </div>

                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />

                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-green-600 mr-2" />
                            <span className="text-gray-700">{recipe.prepTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="w-5 h-5 text-green-600 mr-2" />
                            <span className="text-gray-700">{recipe.difficulty}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6">{recipe.description}</p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Ingredientes</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {recipe.ingredients.map((ingredient, i) => (
                              <li key={i} className="text-gray-700">
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Instruções</h4>
                          <ol className="list-decimal pl-5 space-y-2">
                            {recipe.instructions.map((instruction, i) => (
                              <li key={i} className="text-gray-700">
                                {instruction}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#food-banks"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Encontre bancos de alimentos próximos a você
          </a>
        </motion.div>
      </div>
    </section>
  )
}
