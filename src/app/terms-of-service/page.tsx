import Link from "next/link"

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Termos de Serviço</h1>

          <div className="prose prose-green max-w-none">
            <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Bem-vindo ao FoodSaveBR. Ao acessar ou usar nosso site, você concorda em cumprir e estar vinculado a estes
              Termos de Serviço. Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar
              nosso site ou serviços.
            </p>

            <h2>2. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor
              imediatamente após a publicação dos termos atualizados. Seu uso contínuo do site após tais alterações
              constitui sua aceitação dos novos termos.
            </p>

            <h2>3. Uso do Site</h2>
            <p>
              Você concorda em usar nosso site apenas para fins legais e de maneira que não infrinja os direitos de
              terceiros ou restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro. O uso proibido
              inclui, mas não se limita a:
            </p>
            <ul>
              <li>Conduta que constitua um crime, cause danos civis ou viole qualquer lei aplicável</li>
              <li>Transmissão de material difamatório, ofensivo, obsceno ou de natureza ameaçadora</li>
              <li>Uso que possa prejudicar, sobrecarregar ou comprometer a segurança de nossos sistemas</li>
              <li>Coleta não autorizada de dados de usuários ou conteúdo do site</li>
              <li>Uso de bots, raspadores ou outros métodos automatizados</li>
            </ul>

            <h2>4. Contas de Usuário</h2>
            <p>
              Algumas áreas do nosso site podem exigir registro ou solicitar informações para permitir acesso a
              conteúdos ou serviços. Quando você se registra, concorda em:
            </p>
            <ul>
              <li>Fornecer informações precisas, atuais e completas</li>
              <li>Manter e atualizar prontamente suas informações</li>
              <li>Manter a segurança de sua senha e identificação</li>
              <li>Ser responsável por todas as atividades que ocorram sob sua conta</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
            </ul>

            <h2>5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo incluído em ou disponibilizado através do nosso site, incluindo texto, gráficos,
              logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é
              propriedade do FoodSaveBR ou de seus fornecedores de conteúdo e está protegido pelas leis de propriedade
              intelectual brasileiras e internacionais.
            </p>
            <p>
              Você pode visualizar, baixar e imprimir conteúdo do nosso site apenas para seu uso pessoal e não
              comercial, desde que você não modifique ou exclua quaisquer direitos autorais, marcas registradas ou
              outras notificações proprietárias.
            </p>

            <h2>6. Conteúdo do Usuário</h2>
            <p>
              Ao enviar, postar ou exibir conteúdo em nosso site, você nos concede uma licença mundial, não exclusiva,
              livre de royalties para usar, reproduzir, adaptar, publicar, traduzir e distribuir seu conteúdo em
              qualquer mídia existente ou futura.
            </p>
            <p>
              Você é o único responsável por qualquer conteúdo que enviar e garante que tem o direito de conceder a
              licença acima. Você também concorda que seu conteúdo não violará os direitos de terceiros ou quaisquer
              leis aplicáveis.
            </p>

            <h2>7. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros que não são de propriedade ou controlados pelo
              FoodSaveBR. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou
              práticas de sites de terceiros. Você reconhece e concorda que não seremos responsáveis, direta ou
              indiretamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou
              confiança em qualquer conteúdo, bens ou serviços disponíveis em ou através de tais sites.
            </p>

            <h2>8. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância o FoodSaveBR, seus diretores, funcionários, parceiros ou agentes serão
              responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos,
              incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis,
              resultantes de:
            </p>
            <ul>
              <li>Seu acesso ou uso ou incapacidade de acessar ou usar o site</li>
              <li>Qualquer conduta ou conteúdo de terceiros no site</li>
              <li>Conteúdo obtido do site</li>
              <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo</li>
            </ul>

            <h2>9. Indenização</h2>
            <p>
              Você concorda em indenizar, defender e isentar o FoodSaveBR, seus diretores, funcionários, parceiros e
              agentes de e contra quaisquer reclamações, responsabilidades, danos, perdas e despesas, incluindo, sem
              limitação, honorários advocatícios razoáveis, decorrentes de ou de qualquer forma relacionados com seu
              acesso ou uso do site, seu conteúdo ou sua violação destes Termos de Serviço.
            </p>

            <h2>10. Lei Aplicável</h2>
            <p>
              Estes Termos de Serviço serão regidos e interpretados de acordo com as leis do Brasil, sem consideração
              aos seus princípios de conflito de leis.
            </p>

            <h2>11. Resolução de Disputas</h2>
            <p>
              Qualquer disputa decorrente ou relacionada a estes Termos de Serviço será submetida à jurisdição exclusiva
              dos tribunais da cidade de São Paulo, Brasil.
            </p>

            <h2>12. Divisibilidade</h2>
            <p>
              Se qualquer disposição destes Termos de Serviço for considerada ilegal, nula ou inexequível por qualquer
              motivo, essa disposição será considerada separável destes Termos de Serviço e não afetará a validade e
              exequibilidade de quaisquer disposições restantes.
            </p>

            <h2>13. Contato</h2>
            <p>Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco em:</p>
            <p>
              Email: <a href="mailto:legal@foodsavebr.org">legal@foodsavebr.org</a>
              <br />
              Endereço: Av. Paulista, 1000, São Paulo, SP, Brasil
              <br />
              Telefone: +55 (11) 1234-5678
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

