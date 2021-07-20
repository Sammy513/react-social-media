import styled from "styled-components";


export const Header = styled.header`
@media (max-width: 400px) {
    flex-direction: column;

    h1 {
        margin-left: 0;
    }

    div {
        margin-left: 0;
    }
}

width: 100%;
display: flex;
padding-right: 4rem;
h1 {
        margin-left: 20px;
        font-size: 50px;
        font-weight: 100;
    }
form {
   
  div {
        border-radius: 5px;
        background: #fff;    
        display: flex;
        padding: 1rem;
        margin-left: 20px;

    input {
        border: 0;
        outline: 0;
        font-size: 16px;
        margin-left: 10px;
    }
}
}
`