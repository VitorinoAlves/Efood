import { createGlobalStyle } from 'styled-components';


export const cores ={
    laranja: '#E66767',
    laranjaClaro: '#FFEBD9',
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        passing: 0;
        box-sizing: border-box; 
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    body{
        background-color:rgb(255, 247, 240)
    }
`