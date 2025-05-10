import Link from "next/link"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Voltar para a página inicial
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Política de Cookies</h1>

          <div className="prose prose-green max-w-none">
            <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

            <h2>1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, tablet,
              smartphone) quando você visita um site. Cookies são amplamente utilizados para fazer os sites funcionarem
              de maneira mais eficiente, bem como fornecer informações aos proprietários do site.
            </p>

            <h2>2. Como Usamos Cookies</h2>
            <p>O FoodSaveBR utiliza cookies para diversos propósitos, incluindo:</p>
            <ul>
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site. Eles permitem que
                você navegue pelo site e use recursos essenciais, como áreas seguras e formulários de contato.
              </li>
              <li>
                <strong>Cookies de Preferências:</strong> Permitem que o site lembre informações que mudam a aparência
                ou o comportamento do site, como seu idioma preferido ou a região em que você está.
              </li>
              <li>
                <strong>Cookies de Estatísticas/Análise:</strong> Ajudam-nos a entender como os visitantes interagem com
                o site, coletando e relatando informações anonimamente. Isso nos ajuda a melhorar a forma como o site
                funciona.
              </li>
              <li>
                <strong>Cookies de Marketing:</strong> Usados para rastrear visitantes em sites. A intenção é exibir
                anúncios relevantes e envolventes para o usuário individual.
              </li>
            </ul>

            <h2>3. Tipos de Cookies que Utilizamos</h2>
            <h3>3.1 Cookies de Sessão</h3>
            <p>
              Cookies temporários que são apagados quando você fecha o navegador. Eles são usados para manter o estado
              da sua sessão enquanto você navega pelo site.
            </p>

            <h3>3.2 Cookies Persistentes</h3>
            <p>
              Permanecem em seu dispositivo por um período específico ou até que você os exclua manualmente. Eles são
              usados para lembrar suas preferências ou ações em vários sites.
            </p>

            <h3>3.3 Cookies Próprios</h3>
            <p>Definidos por nós e usados para melhorar sua experiência em nosso site.</p>

            <h3>3.4 Cookies de Terceiros</h3>
            <p>
              Definidos por terceiros, como Google Analytics, para coletar informações sobre seu comportamento de
              navegação e ajudar-nos a entender como os visitantes interagem com nosso site.
            </p>

            <h2>4. Cookies Específicos que Utilizamos</h2>
            <table className="min-w-full border-collapse border border-gray-300 my-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Nome do Cookie</th>
                  <th className="border border-gray-300 px-4 py-2">Propósito</th>
                  <th className="border border-gray-300 px-4 py-2">Duração</th>
                  <th className="border border-gray-300 px-4 py-2">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_ga</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Usado pelo Google Analytics para distinguir usuários
                  </td>
                  <td className="border border-gray-300 px-4 py-2">2 anos</td>
                  <td className="border border-gray-300 px-4 py-2">Análise</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_gid</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Usado pelo Google Analytics para distinguir usuários
                  </td>
                  <td className="border border-gray-300 px-4 py-2">24 horas</td>
                  <td className="border border-gray-300 px-4 py-2">Análise</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_gat</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Usado pelo Google Analytics para limitar a taxa de solicitação
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                  <td className="border border-gray-300 px-4 py-2">Análise</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">cookieconsent_status</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Armazena suas preferências de consentimento de cookies
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1 ano</td>
                  <td className="border border-gray-300 px-4 py-2">Necessário</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">session_id</td>
                  <td className="border border-gray-300 px-4 py-2">Mantém o estado da sessão do usuário</td>
                  <td className="border border-gray-300 px-4 py-2">Sessão</td>
                  <td className="border border-gray-300 px-4 py-2">Necessário</td>
                </tr>
              </tbody>
            </table>

            <h2>5. Como Gerenciar Cookies</h2>
            <p>
              A maioria dos navegadores permite que você controle cookies através de suas configurações. Você pode
              geralmente aceitar, recusar ou remover cookies das seguintes maneiras:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Menu {'>'} Configurações {'>'} Avançado {'>'} Privacidade e segurança {'>'}
                Configurações de conteúdo {'>'} Cookies
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Menu {'>'} Opções {'>'} Privacidade e Segurança {'>'} Cookies e dados do site
              </li>
              <li>
                i{'>'}
                <strong>Safari:</strong> Preferências {'>'} Privacidade {'>'} Cookies e dados do site
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Menu {'>'} Configurações {'>'} Cookies e permissões do site {'>'} Cookies
              </li>
            </ul>
            <p>
              Observe que restringir cookies pode impactar a funcionalidade de nosso site e muitos outros sites que você
              visita.
            </p>

            <h2>6. Cookies e Privacidade</h2>
            <p>
              Para obter mais informações sobre como protegemos seus dados pessoais, consulte nossa{" "}
              <Link href="/privacy-policy" className="text-green-600 hover:text-green-700">
                Política de Privacidade
              </Link>
              .
            </p>

            <h2>7. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar nossa Política de Cookies periodicamente. Recomendamos que você revise esta página
              regularmente para estar ciente de quaisquer alterações. A data da última atualização será indicada no
              início desta política.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

