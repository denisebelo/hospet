import { useState, useContext, createContext } from "react";
import jwt_decode from "jwt-decode";
import api from "../../Services";

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const updateInfo = () => {
    const token = JSON.parse(localStorage.getItem("@capstone:token"));
    const decoded = token ? jwt_decode(token.accessToken) : "";
    api
      .get(`users/${decoded.sub}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <UserInfoContext.Provider value={{ user, setUser, updateInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
