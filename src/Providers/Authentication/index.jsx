import { useEffect, useContext, useState, createContext } from "react";
import { useToken } from "../Token";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const initialState =
    JSON.parse(localStorage.getItem("@capstone:token")) || false;
  const [authenticated, setAuthenticated] = useState(initialState);
  const { token } = useToken();

  useEffect(() => {
    if (token !== "") {
      return setAuthenticated(true);
    }
  }, [token]);

  return (
    <AuthenticationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
