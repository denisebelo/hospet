import { useUserInfo } from "../../Providers/infoProvider";
import { useEffect, useState } from "react";
import { ContainerCards, Container } from "./style";
import CardPet from "../../Components/CardPet";
import { Button } from "@material-ui/core";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useHistory } from "react-router";

const PetsPage = ({ authenticated }) => {
  const history = useHistory();
  const { user } = useUserInfo();

  if (authenticated === false) {
    history.push("/login");
  }

  if (user.host === true) {
    history.push("/dashboardHost");
  }

  const [id, setId] = useState();

  function goToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    setId(user.id);
  }, [user]);

  return (
    <Container>
      <ContainerCards>
        {user.pets ? (
          <div className="petsConteiner">
            {user.pets.map((pet, index) => (
              <CardPet
                key={index}
                name={pet.petName}
                breed={pet.petBreed}
                specie={pet.petSpecies}
                age={pet.petAge}
                gender={pet.petGender}
                castrated={pet.petIsCastrated}
                food={pet.petFood}
                toy={pet.petHaveToy}
                flu={pet.petTheFlu}
                otite={pet.petOtite}
                depression={pet.petDepression}
                allergyFood={pet.petAllergyFood}
                allergyInsect={pet.petAllergyInsect}
                AllergyChemistry={pet.petAllergyChemistry}
                comments={pet.petComments}
                pet={pet}
                id={user.id}
              />
            ))}
          </div>
        ) : (
          <div className="noPets">
            <h1>Não ah pets cadastrados ainda</h1>
          </div>
        )}
      </ContainerCards>
      <div className="containerButtons">
        <Button
          className="addPet buttonStyle"
          onClick={() => history.push("/register-pets")}
        >
          Adicionar pet
        </Button>
        <Button className="toTop buttonStyle " onClick={goToTop}>
          Go to top
          <AiOutlineArrowUp />
        </Button>
      </div>
    </Container>
  );
};

export default PetsPage;
