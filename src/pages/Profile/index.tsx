import React from "react"

import { Container, ContainerProfileInfo } from "./style"
import { useParams} from 'react-router'

import UserImg from '../../assets/user.png'
import { useProvider } from "../../hooks/dataHook"

interface UrlParamsProps {
    profile: string
}


export const Profile: React.FC = () => {
    const {data} = useProvider()

    const {profile} = useParams<UrlParamsProps>()

    const result = data.find(user => user.id === Number(profile))
    
    return (
        <>
        <Container>
            <img src={UserImg} alt="user profile" />
            <div key={result.id}>
                <strong>{result.name}</strong>
                <p>{result.username}</p>
                <p>{result.email}</p>
            </div>
        </Container>

        <ContainerProfileInfo key={result.id}>
             <h1>Profile info</h1>
             <p>Address: {result.address.street}</p>
             <p>Suite: {result.address.suite}</p>
             <p>City: {result.address.city}</p>
             <p>Zipcode: {result.address.zipcode}</p>
 
             <p>Phone: {result.phone}</p>
             <p>Company: {result.company.name}</p>
             <p>CatchPhrase:{result.company.catchPhrase}</p>
         </ContainerProfileInfo>
        </>
    )
}