import { useEffect, useState, useContext, createContext } from "react";

export const HostContext = createContext();

export const HostProvider = ({ children }) => {

    const [host, setHost] = useState();
    
    return(
        <HostContext.Provider value={{host, setHost}}>
        {children}
        </HostContext.Provider>
    )
}

export const useHost = () => useContext(HostContext);