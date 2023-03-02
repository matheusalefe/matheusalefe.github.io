import styled from 'styled-components'

export const Container = styled.header `
    background-color: var(--primary-color);
    min-width: 100vw;
    height: 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        padding-left: 3rem;
        font-size: 3rem;
        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
    }
    a{
        text-decoration: none;
        color: var(--text-beige);
        font-weight: 500;
        font-size: 1.25rem;
    }
    #instagram{
        max-width: 5rem;
    }
    #logo{
        height: 5rem;
    }
    #grupo_logo{
        height: 100%;
        width: 18rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 1rem;
        font-weight: 400;
        cursor: pointer;
        h2{
            padding-left: 0.5rem;
            white-space: nowrap;
        }
    
        img{
            height: 100%;
        }
        @media (max-width: 820px){
            a{
                height: 100%;
                width: fit-content;
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: 1rem;
                font-weight: 400;
                h2{
                padding-left: 0.5rem;
                white-space: nowrap;
                }
            
                img{
                    height: 75%;
                }
            }
        }
    }
    #menu_container{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 4.5rem;
    }
    #menu_icon{
        min-width: 3rem;
        width: fit-content;
        img{
            width: 50%;
        }
    }
    #menu{
        width: 100vw;
        img{
            width: 3rem;
        }
    }
    #barra_lateral{
        width: 100%;
        height: 95vh;
        display: flex;
        flex-direction: column;
        background-color: var(--primary-color);
        align-items: center;
        justify-content: space-evenly;
        a{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    #links{
        display: flex;
        min-height: 5rem;
        flex-direction: column;
        margin: 0.5rem;
        padding: 0.5rem;
        padding-right: 1rem;
        a{
            :hover{
                color: var(--background-dark-color-hover)
            }
        }
    }
`