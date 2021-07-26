
import { useState, useEffect ,useContext, ReactNode ,createContext } from "react"
import api from "../services/api"

interface Data {
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
    },
    phone: string,
    company: {
      name: string,
      catchPhrase: string,
    }
}

interface DataContextProps {
    children?: ReactNode
}


const DataContext = createContext<Data[]>([])

export const DataProvider: React.FC = ({children}: DataContextProps) => {

    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        api.get<Data[]>('users')
        .then(response => setData(response.data))
    }, [])

    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export function useProvider() {
    const context = useContext(DataContext)

    return context
}