import React, {useCallback, useState, useEffect, FormEvent} from 'react';

import { User } from '../../components/User/index'

import {BiSearch} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'

import { Header } from './style'

import {useProvider} from '../../hooks/dataHook'


interface AddressProps {
  city: string
}

export interface UserData {
  name:string,
  username: string,
  id: string,
  address: AddressProps
}

export const UserList: React.FC = () => {

  const {data} = useProvider()
  
  const [userSearch, setUserSearch] = useState<UserData[]>([])

  const[val, setVal] = useState('')

  useEffect(() => {
    if(!val) {
      setUserSearch([])
    }
  }, [val])

  const searchUser = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = data.find(user => user.username === val) as UserData
    setUserSearch([result])
}, [val,data])

  return (
    <>
     <Header>
            <h1>
            <FaUser size={50}/>
            User list
            </h1>
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
    <User data={userSearch.length > 0 ? userSearch : data}/>
    </>
  )
}