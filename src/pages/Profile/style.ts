import styled from "styled-components";



export const Container = styled.div`
@media (max-width: 350px){
height: 100px;
font-size: 15px;
img {
    width: 100px;
    margin-right: 20px;
    border-radius: 5px;
}

}
max-width: 500px;
height: 150px;
display: flex;

background: #ffffff;
font-size: 20px;
border-radius: 5px;

 img {
    max-width: 150px;
    border-radius: 5px;
}

div {
    padding: 1rem;
   p {
       margin-top: 5px;
   }
}
`

export const ContainerProfileInfo = styled.div`
margin-top: 100px;

h1 {
    font-size: 40px;
}

p {
    font-size: 20px;
    margin-top: 10px;
}
`