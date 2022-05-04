import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --azul: #79819D;
    --pastel: #FFFFE0;
    --footer: #D8BFD8;
    --backgroundForm: #F3F3F3;
    --colorButton: #243570;
    --branco: #fff;
    --preto: #000000;
    --cinza: #808080;
}

*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body{
    background-color: var(--white);
    font-family: 'Autour One', cursive;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

`;
