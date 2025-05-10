import Link from "next/link"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>

          <div className="prose prose-green max-w-none">
            <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

            <h2>1. Introdução</h2>
            <p>
              Bem-vindo à Política de Privacidade do FoodSaveBR. Esta política descreve como coletamos, usamos,
              processamos e compartilhamos suas informações pessoais quando você visita nosso site, interage com nosso
              conteúdo ou utiliza nossos serviços.
            </p>

            <h2>2. Informações que Coletamos</h2>
            <p>Podemos coletar os seguintes tipos de informações:</p>
            <ul>
              <li>
                <strong>Informações Pessoais:</strong> Nome, endereço de e-mail, número de telefone e endereço postal
                quando você se inscreve em nossa newsletter, entra em contato conosco ou participa de nossas
                iniciativas.
              </li>
              <li>
                <strong>Informações de Uso:</strong> Dados sobre como você interage com nosso site, incluindo páginas
                visitadas, tempo gasto no site, links clicados e preferências de navegação.
              </li>
              <li>
                <strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, tipo de
                navegador, configurações de idioma e endereço IP.
              </li>
              <li>
                <strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies e tecnologias similares para
                melhorar sua experiência em nosso site. Para mais informações, consulte nossa Política de Cookies.
              </li>
            </ul>

            <h2>3. Como Usamos Suas Informações</h2>
            <p>Utilizamos suas informações para os seguintes propósitos:</p>
            <ul>
              <li>Fornecer, manter e melhorar nosso site e serviços</li>
              <li>Enviar newsletters, atualizações e informações sobre nossas iniciativas</li>
              <li>Responder a suas perguntas, comentários ou solicitações</li>
              <li>Analisar tendências de uso e melhorar a experiência do usuário</li>
              <li>Prevenir atividades fraudulentas e garantir a segurança de nosso site</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais a terceiros. Podemos compartilhar suas informações nas seguintes
              circunstâncias:
            </p>
            <ul>
              <li>
                <strong>Parceiros de Serviço:</strong> Podemos compartilhar informações com prestadores de serviços
                terceirizados que nos ajudam a operar nosso site e fornecer nossos serviços.
              </li>
              <li>
                <strong>Conformidade Legal:</strong> Podemos divulgar informações quando acreditamos, de boa fé, que a
                divulgação é necessária para cumprir a lei, proteger nossos direitos ou responder a um processo legal.
              </li>
              <li>
                <strong>Com Seu Consentimento:</strong> Podemos compartilhar informações com terceiros quando você nos
                der consentimento explícito para fazê-lo.
              </li>
            </ul>

            <h2>5. Seus Direitos</h2>
            <p>
              Dependendo de sua localização, você pode ter os seguintes direitos em relação às suas informações
              pessoais:
            </p>
            <ul>
              <li>Direito de acesso às suas informações pessoais</li>
              <li>Direito de retificar informações imprecisas</li>
              <li>Direito de apagar suas informações pessoais</li>
              <li>Direito de restringir o processamento de suas informações</li>
              <li>Direito à portabilidade de dados</li>
              <li>Direito de se opor ao processamento de suas informações</li>
              <li>Direito de retirar o consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail:{" "}
              <a href="mailto:privacy@foodsavebr.org">privacy@foodsavebr.org</a>.
            </p>

            <h2>6. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações
              pessoais contra acesso não autorizado, uso indevido, divulgação, alteração ou destruição. No entanto,
              nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não
              podemos garantir sua segurança absoluta.
            </p>

            <h2>7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
              Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>

            <h2>8. Crianças</h2>
            <p>
              Nosso site não é direcionado a crianças menores de 13 anos, e não coletamos intencionalmente informações
              pessoais de crianças menores de 13 anos. Se você acredita que coletamos informações de uma criança menor
              de 13 anos, entre em contato conosco para que possamos tomar as medidas apropriadas para remover essas
              informações.
            </p>

            <h2>9. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de
              informação. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer
              alterações. A data da última atualização será indicada no início desta política.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

