import { Container } from './styles'
import tm from '../../assets/img/TM-Logo.png'
import ufabc from '../../assets/img/ufabc-logo.png'
interface ConteudoProps{
    pagina:string
}

export function Conteudo({pagina}:ConteudoProps){

    return(
        <Container>
            {
                pagina === 'habilidades_e_idiomas'? 
                <div id='main'>
                    <h1 id="titulo">{"Habilidades & Idiomas"}</h1>
                    <section className='conteudo'>
                        <h2>Habilidades</h2>
                        <hr />
                        <ul>
                            <li>Pacote Office (avançado)</li>
                            <li>HTML e CSS (avançado)</li>
                            <li>Python3 (avançado)</li>
                            <li>Django (intermediário)</li>
                            <li>Metodologias Ágeis (avançado)</li>
                            <li>TypeScript (avançado)</li>
                            <li>React.js (avançado)</li>
                        </ul>
                    </section>
                    <section className='conteudo'>
                        <h2>Idiomas</h2>
                        <hr />
                        <ul>
                            <li>Português (nativo)</li>
                            <li>Inglês (fluente)</li>
                            <li>Espanhol (avançado)</li>
                            <li>Alemão (iniciante)</li>
                        </ul>
                    </section>
                </div> 
                : 
                pagina === 'contato'? 
                <div id='main'>
                    <section className='conteudo'>
                        <h2>Informações Pessoais</h2>
                        <hr />
                        <ul>
                            <li>Endereço: Vila Scarpelli, Santo André -SP</li>
                            <li>Idade: 19 anos</li>
                            <li>Estado Civil: Solteiro</li>
                        </ul>
                    </section>
                    <section className='conteudo'>
                        <h2>Contato</h2>
                        <hr />
                        <ul>
                            <li>Telefone Celular: (11) 99580-2314</li>
                            <li>Email: matheus.orvati@hotmail.com</li>
                        </ul>
                    </section>
                </div> 
                : 
                <main id='main'>
                    <h1 className="titulo">Formação Acadêmica</h1>
                    <hr />
                    <section className="conteudo">
                        <h2>Ensino Médio:</h2>
                        <div className="posicaoimg">
                            <div>
                                <p>Centro Educacional da Fundação Salvador Arena – Colégio Termomecanica</p>
                                <p>Situação: Formado</p>
                                <p>Período: Janeiro/2018 - Dezembro/2020</p>
                            </div>
                            <img src={tm} alt="" />
                        </div>

                        <h2>Graduação</h2>
                        <div className="posicaoimg">
                            <div>
                                <p>Universidade Federal do ABC - UFABC</p>
                                <p>Curso: Bacharel em Ciência e Tecnologia (BC&T)</p>
                                <p>Situação: Matriculado</p>
                                <p>Período: Setembro/2021 em diante</p>
                            </div>
                            <img src={ufabc} alt="" />
                        </div>
                    </section>
                    <h1 className="titulo">Experiências relevantes</h1>
                    <hr />
                    <section className="conteudo">
                        <ul>
                            <li>Viagem internacional pela InfoRMI Robotics trabalhando como programador de robô industrial na Volkswagen Argentina em Pacheco/Buenos Aires.</li>
                            <li>Capitão e programador da equipe de robótica do colégio;</li>
                            <li>Palestrante sobre Educação financeira no evento "Areninha em debate" organizado pelo Colégio Termomecanica</li>
                            <li>Participação no desenvolvimento de projeto front-end para a InfoRMI Robotics utilizando React.ts e a metodologia Ágil Scrum </li>
                        </ul>
                    </section>
                    <h1 className="titulo">Experiência Profissional</h1>
                    <hr />
                    <div className="conteudo">
                <div className="texto-conteudo">
                    <h3>InfoRMI - Solução em Automação e TI</h3>
                    <ul className="lista-atributos">
                        <li>Cargos: 
                            <ul>
                                <li>Estagiário (Mai/22 - Out/22)</li>
                                <li>Programador Jr (Out/22 - Atualmente)</li>
                            </ul>
                            </li>
                    </ul>
                    <p className="no-print">InfoRMI tem como principal atividade a programação de Controladores Lógicos Programáveis (CLP) e Interfaces Homem Máquina (IHM) na área de automação.
                    Com o objetivo de fornecer soluções para empresas e seus produtos, a InfoRMI aplica novas e já consagradas tecnologias no ramo da automação. 
                    Desenvolvemos Sistema de Rastreabilidade e Automação baseada em PC. 
                    Trabalhamos lado a lado com nossos clientes desde a definição de arquitetura do sistema. 
                    Fornecemos consultoria para redesenho de processos. 
                    Desenvolvemos softwares sob medida para cada negócio. 
                    Executamos baterias de testes para garantir a qualidade do nosso trabalho. 
                    Acompanhamos o processo de implantação, oferecendo treinamentos e garantia.</p>
                    <h4>Funções desempenhadas:</h4>
                    <ul>
                        <li>Programador de robô industrial</li>
                        <li>Programador Front-end</li>
                    </ul>
                </div>

                
            </div>
            <div className="conteudo">
                <div className="texto-conteudo">
                    <h3>Grupo Herval - Loja iPlace Shopping ABC</h3>
                    <ul className="lista-atributos">
                        <li>Cargo: Consultor interno de vendas</li>
                        <li>Período: Jul/21 - Mai/22</li>
                    </ul>
                    <p className="no-print">As Lojas iPlace fazem parte do Grupo Herval que é uma empresa gaúcha fundada em 1959, reconhecida por seus clientes pela qualidade e pela tradição.
                    Com sede na cidade de Dois Irmãos/RS, integra segmentos diferenciados e está presente em todas as regiões do país. A iPlace é especialista Apple, reconhecida pela qualidade, simplicidade e inovação ligados à marca.
                    As lojas iPlace oferecem o mais alto padrão de atendimento, com consultores especializados e um ambiente preparado para interagir com os produtos Apple e marca própria.Atualmente, possuímos mais de 140 lojas iPlace no Brasil e assumimos uma posição de maior APR do Brasil e de toda América Latina. Na iPlace, além de encontrar toda linha de produtos e acessórios Apple e marca própria, você também encontra serviços diferenciados, como assistência técnica autorizada, treinamentos personalizados e workshops gratuitos.</p>
                    <h4>Funções desempenhadas:</h4>
                        <ul>
                            <li>Atendimento e negociação com o cliente</li>
                            <li>Organização do espaço de trabalho</li>
                            <li>Negociação a distância via mídias sociais, telefone e CRM</li>
                        </ul>
                        <hr/>
                </div>
                
            
        </div>

                </main>
            }
        </Container>
    )
}