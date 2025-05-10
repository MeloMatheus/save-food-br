"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

type Question = {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function MiniGame() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const questions: Question[] = [
    {
      question: "Quanto alimento é desperdiçado globalmente a cada ano?",
      options: [
        "500 milhões de toneladas",
        "1,3 bilhão de toneladas",
        "3 bilhões de toneladas",
        "10 bilhões de toneladas",
      ],
      correctAnswer: 1,
      explanation:
        "De acordo com a Organização das Nações Unidas para Alimentação e Agricultura (FAO), aproximadamente 1,3 bilhão de toneladas de alimentos são desperdiçadas globalmente a cada ano, o que representa cerca de um terço de todos os alimentos produzidos para consumo humano.",
    },
    {
      question: "Qual porcentagem de alimentos é desperdiçada no Brasil?",
      options: ["10%", "20%", "30%", "40%"],
      correctAnswer: 2,
      explanation:
        "No Brasil, aproximadamente 30% de todos os alimentos produzidos são desperdiçados, o que equivale a cerca de 46 milhões de toneladas anualmente.",
    },
    {
      question: "Qual desses alimentos tem o maior impacto ambiental quando desperdiçado?",
      options: ["Vegetais", "Frutas", "Pão", "Carne bovina"],
      correctAnswer: 3,
      explanation:
        "A carne bovina tem o maior impacto ambiental quando desperdiçada devido aos recursos necessários para a produção, incluindo terra, água, ração e as emissões de metano do gado.",
    },
    {
      question: "Qual é a melhor maneira de armazenar bananas para evitar que amadureçam muito rapidamente?",
      options: [
        "Na geladeira",
        "Em um saco plástico fechado",
        "Separadas de outras frutas",
        "Penduradas em um gancho para bananas",
      ],
      correctAnswer: 2,
      explanation:
        "As bananas liberam gás etileno, que acelera o amadurecimento. Mantê-las separadas de outras frutas impede que o gás afete outros produtos.",
    },
    {
      question: "Quantas pessoas poderiam ser alimentadas com os alimentos que são desperdiçados no Brasil a cada ano?",
      options: ["5 milhões", "10 milhões", "20 milhões", "30 milhões"],
      correctAnswer: 2,
      explanation:
        "Os alimentos desperdiçados no Brasil a cada ano poderiam alimentar aproximadamente 20 milhões de pessoas, o que é aproximadamente o número de brasileiros que sofrem de insegurança alimentar.",
    },
  ]

  const handleAnswerClick = (selectedIndex: number) => {
    setSelectedAnswer(selectedIndex)
    setShowExplanation(true)

    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  return (
    <section id="mini-game" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Teste seus conhecimentos sobre o desperdício de alimentos
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Faça este quiz rápido para testar seus conhecimentos sobre o desperdício de alimentos no Brasil e ao redor
            do mundo. Aprenda fatos interessantes e descubra como você pode fazer a diferença!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {!showResult ? (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-green-600">Pontuação: {score}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-lg border transition-colors duration-300 ${
                      selectedAnswer === null
                        ? "border-gray-200 hover:border-green-500 hover:bg-green-50"
                        : selectedAnswer === index
                          ? index === questions[currentQuestion].correctAnswer
                            ? "border-green-500 bg-green-100"
                            : "border-red-500 bg-red-100"
                          : index === questions[currentQuestion].correctAnswer
                            ? "border-green-500 bg-green-100"
                            : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex-shrink-0">
                        {selectedAnswer !== null && index === questions[currentQuestion].correctAnswer ? (
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        ) : selectedAnswer === index && index !== questions[currentQuestion].correctAnswer ? (
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                            {String.fromCharCode(65 + index)}
                          </div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    <span className="font-bold">Explicação:</span> {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                    selectedAnswer === null
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultados"}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completo!</h3>
              <p className="text-lg text-gray-700 mb-6">
                Você acertou {score} de {questions.length}
              </p>

              {score === questions.length ? (
                <p className="text-green-600 font-medium mb-8">
                  Pontuação perfeita! Você é um especialista em desperdício de alimentos!
                </p>
              ) : score >= questions.length / 2 ? (
                <p className="text-blue-600 font-medium mb-8">
                  Bom trabalho! Você sabe bastante sobre desperdício de alimentos, mas ainda há mais para aprender.
                </p>
              ) : (
                <p className="text-orange-600 font-medium mb-8">
                  Obrigado por fazer o quiz! Agora você aprendeu alguns fatos importantes sobre o desperdício de
                  alimentos.
                </p>
              )}

              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors duration-300"
              >
                Fazer o Quiz Novamente
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

