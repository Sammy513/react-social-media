import React, {useCallback, useState, useEffect, FormEvent} from 'react';

import { User } from '../../components/User/index'

import api from '../../services/api'
import {BiSearch} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'

import { Header } from './style'


interface AddressProps {
  city: string
}

export interface UserData {
  name:string,
  username: string,
  id: number,
  address: AddressProps
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([])
  
  const [userSearch, setUserSearch] = useState<UserData[]>([])

  const[val, setVal] = useState('')

  useEffect(() => {
    api.get<UserData[]>('/users')
    .then(response => setUsers(response.data))
    if(!val) {
      setUserSearch([])
    }
  }, [val])

  const searchUser = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = users.find(user => user.username === val) as UserData
    setUserSearch([result])
}, [val,users])

  return (
    <>
     <Header>
            <FaUser size={50}/>
            <h1>User list</h1>
            <form onSubmit={searchUser}>
              <div>
              <BiSearch size={20}/>
             <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              type="text" 
              placeholder="Search for a user..."/>
           </div>
        </form>
    </Header>
    <User data={userSearch.length > 0 ? userSearch : users}/>
    </>
  )
}