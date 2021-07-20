
import { Container} from './style'

import UserImg from '../../assets/user.png'

import {UserData} from '../../pages/User/index'

interface UserProps {
    data: UserData[]
}

export const User: React.FC<UserProps> = ({data}) => {
    return(
        <>
            <Container>
            {data.map(user => (
                <div key={user.id}>
                    <img src={UserImg} alt="User" />
                    <strong>{user.name}</strong>
                    <p>{user.username}</p>
                    <p>{user.address.city}</p>
                </div>
            ))}
            </Container>
        </>
    )
}