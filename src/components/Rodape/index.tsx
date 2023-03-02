import { Container } from './styles'
import { opcoes } from '../../App'
import { Link } from 'react-router-dom'

export function Rodape(){

    return(
        <Container>
            <div id='main'>
                <h1>Matheus A. M. Zanardi</h1>
                <div id='navegue'>
                    <span>Navegue</span>
                    {opcoes.map((opt, key) => <Link to={`/${opt.rota}`} onClick={() => document.querySelector('html')?.scrollTo(0,0)} key={key.toString()}>{opt.etiqueta}</Link>)}
                </div>
            </div>
            <p>Feito com carinho pela <a href="https://www.empirestarltda.com">Empire Star</a></p>
        </Container>
    )
}