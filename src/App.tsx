import GlobalStyle from './styles/global'; //Importa os estilos globais da aplicação
import React, { useState } from 'react';
import { Cabecalho } from './components/Cabecalho';
import { Conteudo } from './components/Conteudo';
import { Rodape } from './components/Rodape';

interface AppProps{
  pagina:string
}

interface Topico{
  rota: string,
  etiqueta: string
}


export const opcoes :Array<Topico> = [ 
  {
      rota: 'home',
      etiqueta: 'Pagina Inicial'
  },
  {
      rota:'habilidades_e_idiomas',
      etiqueta:'Habilidades & Idiomas'
  }, 
  {
      rota:'contato',
      etiqueta:'Informações Pessoais & Contato '
  }
]


function App({ pagina }:AppProps) {
  const [estadoMenu, mudarEstadoMenu] = useState(false)
  return (
      <main className='App'>
        <GlobalStyle tema='claro'/>
        <Cabecalho funcaoCabecalho={() => mudarEstadoMenu(!estadoMenu)} estadoCabecalho={estadoMenu}/>
        {
        estadoMenu === false?
          <>
            <Conteudo pagina={pagina}/>
            <Rodape/>
          </>
          :
          <>
          
          </>
        }

      </main>
  );
}

export default App;
