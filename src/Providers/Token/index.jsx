import { useEffect, useState, useContext, createContext } from "react";

export const TokenContext = createContext([]);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@capstone:token")) || ""
  );

  useEffect(() => {
    const initialToken =
      JSON.parse(localStorage.getItem("@capstone:token")) || "";

      console.log(token, 'PROVIDER TOKEN');
      setToken(initialToken);
  }, []);
  
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
export const useToken = () => useContext(TokenContext);
