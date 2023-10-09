import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #1f1e1e;
        color: white;
    }
    input:focus,
    textarea:focus,
    select:focus,
    a:focus,
    button:focus
    {
        outline: none;
    }
`

export default GlobalStyle;