import { useState, useContext, createContext, useEffect } from "react";
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";
import api from "../../Services";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [id, setId] = useState();

  const token = JSON.parse(localStorage.getItem("@capstone:token")) || "";

  const addServices = (servicesToAdd, id) => {
    setId(id);
    setServices([...services, servicesToAdd]);
  };

  useEffect(() => {
    setServices(services);
    api
      .patch(
        `/users/${id}`,
        { services: services },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )
      .then((res) =>
        res.status === 200
          ? toast.success("Reservado")
          : toast.error("Falha a o reservar")
      );
  }, [services]);

  const deleteServices = (servicesToDelete, id) => {
    const filtered = services.filter(
      (service) => servicesToDelete.clientId !== services.clientId
    );

    setServices(filtered);
    console.log(filtered);
    api
      .patch(
        `/users/${id}`,
        { services: filtered },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )
      .then((response) => toast.sucesso("Recusado!"));
  };

  return (
    <ServicesContext.Provider
      value={{ services, addServices, setServices, deleteServices, id, setId }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
