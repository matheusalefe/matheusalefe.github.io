import menu from '../../assets/icons/menu.svg'

import { Container } from './styles'
import { opcoes } from '../../App'
import { Link } from 'react-router-dom'

interface CabecalhoProps{
    funcaoCabecalho: () => void,
    estadoCabecalho: boolean,
}

export function Cabecalho({funcaoCabecalho, estadoCabecalho}:CabecalhoProps){
    
    var largura = window.screen.width

    return(
        <Container>
            
            {largura > 501? 
            <>
                <Link to={'/home'}><h1>Matheus Alefe Munari Zanardi</h1></Link>
                <div id="links">{opcoes.map(op => <Link to={`/${op.rota}`}>{op.etiqueta}</Link>)}</div>
                
            </> 
            :
            <div id='menu_container'>
                <div id='grupo_logo' >
                    <div id='menu_icon' onClick={()=>funcaoCabecalho()}><img  src={menu} alt="ícone de menu"/></div>
                    <Link to={'/home'}><h1>Matheus Alefe Munari Zanardi</h1></Link>
                </div>
                <div id="menu">
                    
                    {estadoCabecalho === true?

                        <div id='barra_lateral'>
                            {opcoes.map((option, key) => <Link to={`/${option.rota}`} onClick={() => funcaoCabecalho()} key={key.toString()}>{option.etiqueta}</Link>)}
                        </div> 
                    : 
                        <>
                        
                        </>
                    }
                </div>
                
            </div>
            }
        </Container>
    )
}