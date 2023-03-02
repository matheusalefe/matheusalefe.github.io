import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps{
    tema: 'claro'|'escuro'
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    :root{
        --primary-color: #F27830;
        --primary-color-hover: #F27830;
        --background-dark-color: #233A59;
        --background-dark-color-hover: #182A40;

        --color-white-primary: #FFFFFF;
        --color-white-secondary: #F4F4F5;
        --color-grey-primary: #D4D4D8;
        --color-grey-secondary: #F5F5F5;
        --text-beige: #F9EFC9;

    }
    html{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    body{
        background: ${props => props.tema === 'claro'? "var(--background-dark-color)" : "var(--text-beige)"};
        color: black;
        max-width: 100vw;
        overflow-x: hidden;
    }
    /* ===== Scrollbar CSS ===== */
  

`
export default GlobalStyle