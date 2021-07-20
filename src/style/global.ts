import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

input, button {
    border: 0;
}

button {
    cursor: pointer;
}

#root {
    max-width: 1120px;
    margin: 0 auto;
    background: #00bfff;
    padding: 2rem;
}
`