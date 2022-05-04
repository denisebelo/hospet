import { Button } from "@material-ui/core";
import { usePets } from "../../Providers/PetsProviders";

import { Container } from "./style";

const CardPet = (props) => {
  const { deletePet } = usePets();

  return (
    <Container>
      <div className="imgPet"></div>
      <div className="infoPet">
        <h4>{props.name}</h4>
        <p>
          <b>Raça:</b> {props.breed}
        </p>
        <p>
          <b>Especie:</b> {props.specie}
        </p>
        <p>
          <b>Idade:</b> {props.age}
        </p>
        <p>
          <b>Genero:</b> {props.gender}
        </p>
        <p>
          <b>Castrado:</b> {props.castrated}
        </p>
        <p>
          <b>Alimentação:</b> {props.food}
        </p>
        <p>
          <b>Tem brinquedos:</b> {props.toy}
        </p>
        <p>
          <b>Tem gripe:</b> {props.flu}
        </p>
        <p>
          <b>Tem otite:</b> {props.otite}
        </p>
        <p>
          <b>Tem Depressão:</b> {props.depression}
        </p>
        <p>
          <b>Alergia alimentar:</b> {props.allergyFood}
        </p>
        <p>
          <b>Alergia a insetos:</b> {props.allergyInsect}
        </p>
        <p>
          <b>Alergia a quimicos</b> {props.AllergyChemistry}
        </p>
        <p>
          <b>Observações</b> {props.comments}
        </p>
        <div className="buttonContainer">
          <Button
            onClick={() => {
              deletePet(props.pet, props.id);
            }}
          >
            Remover pet
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CardPet;
