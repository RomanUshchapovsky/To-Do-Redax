import React, {createContext, useState} from 'react'

export const Context = createContext({})

const usersData = [
    // {name: "Olga", id: 1, todos:[]},
    // {name: "Oleg", id: 2, todos:[]},
    // {name: "Petro", id: 3, todos:[]},
    {name: "Olga", id: 1 },
    {name: "Oleg", id: 2 },
    {name: "Petro", id: 3 },
]
export const ContextContainer = ({children}) => {
    const [users, setUsers] = useState(usersData);
    return (
        <Context.Provider value={{users}}>{children}</Context.Provider>
    )
}