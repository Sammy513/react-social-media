
import { Container} from './style'

import UserImg from '../../assets/user.png'

import {UserData} from '../../pages/User/index'
import { Link } from 'react-router-dom'

interface UserProps {
    data: UserData[]
}

export const User: React.FC<UserProps> = ({data}) => {
    return(
        <>
            <Container>
            {data.map(user => (
                <Link to={`/profile/${user.id}`} key={user.username}>
                    <img src={UserImg} alt="User" />
                    <strong>{user.name}</strong>
                    <p>{user.username}</p>
                    <p>{user.address.city}</p>
                </Link>
            ))}
            </Container>
        </>
    )
}