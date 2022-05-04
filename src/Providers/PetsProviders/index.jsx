import { useState, useContext, createContext, useEffect } from "react";
import api from "../../Services";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [id, setId] = useState();

  const token = JSON.parse(localStorage.getItem("@capstone:token")) || "";

  const addPet = (petToAdd) => {
    const token = JSON.parse(localStorage.getItem("@capstone:token"));
    const decoded = jwt_decode(token.accessToken);

    setId(decoded.sub);
    setPets([...pets, petToAdd]);
  };

  useEffect(() => {
    setPets(pets);
    api
      .patch(
        `/users/${id}`,
        { pets: pets },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )
      .then((res) =>
        res.status === 200
          ? toast.success("Pet cadastrado com sucesso")
          : toast.error("Erro no cadastro do pet")
      );
  }, [pets]);

  const deletePet = (petToDelete, id) => {
    const filtered = pets.filter((pet) => pet !== petToDelete.petName);
    setPets(filtered);
    api
      .patch(
        `/users/${id}`,
        { pets: filtered },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )
      .then((res) =>
        res.status === 200
          ? toast.success("Pet deletado com sucesso")
          : toast.error("Não foi possivel deletar o pet")
      );
  };

  return (
    <PetsContext.Provider value={{ pets, addPet, deletePet, setPets, setId }}>
      {children}
    </PetsContext.Provider>
  );
};

export const usePets = () => useContext(PetsContext);
