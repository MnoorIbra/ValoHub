
import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
const ValoContext = React.createContext()

const ValoProvider = ({children}) => {
    const [valo, setValo] = useState([])

    const getValo = async () =>{
        let respone = await axios.get('https://valorant-api.com/v1/agents')
        setValo(respone.data.data)
        
    }

    useEffect(()=>{
        getValo()
    }, [])
    return (
        <ValoContext.Provider value={{ valo }}>
            {children}
        </ValoContext.Provider>
    )
}

export {ValoContext, ValoProvider}




