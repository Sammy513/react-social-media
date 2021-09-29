import styled from "styled-components";


export const ContainerChat = styled.div`
max-width: 528px;
height: 500px;
overflow-x: hidden;
margin-top: 50px;
border: 4px solid #a8a8b3;

display: flex;
flex-direction: column;
margin-top: 50px;

.typing {
    position: relative;
    left: 10px;
    top: 450px;
}
`

export const ContainerVal = styled.div`
input {
        max-width: 528px;
        width: 100%;
        padding: 1rem;
        border: 0;
        color: #000000;
        font-size: 15px;
    }
`