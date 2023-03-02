import styled from 'styled-components'

export const Container = styled.footer `
    width: 100%;
    background-color: black;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    #main{
        width: 100%;
        background-color: black;
        color: var(--primary-color);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }
    h1{
        @media (max-width: 500px) {
            font-size: 1.5rem;
            max-width: 30%;
        }
    }
    img{
        padding: 1rem;
        max-width: 15%;
        @media (max-width: 500px) {
            max-width: 35%;
        }
    }
    #navegue{
        width:25%;
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
        @media (max-width: 500px) {
            width: 58%;
        }
        span{
            font-weight: 600;
            font-size: 1.25rem;
            padding-bottom: 0.5rem;
        }
        a{
            color: var(--primary-color);
            text-decoration: none;
            white-space: nowrap;
            
            &:hover{
                color: var(--primary-color-hover);
            }
        }
    }
    p{
        width: 100%;
        display: flex;
        justify-content: center;
        color: var(--primary-color);
        a{
            padding-left: 0.5rem;
            text-decoration: none;
            color: #FFDE00;
            &:hover{
                color: #FFF194;
            }
        }
    }
`