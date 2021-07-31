import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
    ul{
        list-style-type: none;
    }
    a{
        color: #000;
        text-decoration: none;
    }
    img{
        width: 100%;
    }
`;

export default GlobalStyle;