import {
  ContainerImage,
  ContainerInfo,
  ContainerMaisInfo,
  ContainerPetInfo,
} from "./style";
import little_cat_logo from "../../../src/Assets/img/projeto.png";
import little_dog_logo from "../../../src/Assets/img/dog2.png";

export const ModalInfoPet = ({ infoClient }) => {
  return (
    <>
      <ContainerPetInfo>
        <ContainerImage>
          <img alt="logo_little_cat" src={little_cat_logo} />
          <img alt="logo_little_dog" src={little_dog_logo} />
        </ContainerImage>
        {infoClient.pets.map((petInfo) => (
          <ContainerInfo>
            <h1>Informações do Pet</h1>
            <ContainerMaisInfo>
              <p>
                Nome: <span>{petInfo.petName}</span>
              </p>
              <p>
                Raça: <span>{petInfo.petBreed}</span>
              </p>
              <p>
                Espécie: <span>{petInfo.petSpecies}</span>
              </p>
              <p>
                Idade: <span>{petInfo.petAge}</span>
              </p>
              <p>
                Genêro: <span>{petInfo.petGender}</span>
              </p>
              <p>
                Restrição alimentar? <span>{petInfo.petFood}</span>
              </p>
              <p>
                É castrado? <span>{petInfo.petIsCastrated}</span>
              </p>
              <p>
                Tem brinquedos? <span>{petInfo.petHaveToy}</span>
              </p>
              <p>
                Está gripado? <span>{petInfo.petTheFlu}</span>
              </p>
              <p>
                Tem Otite? <span>{petInfo.petOtite}</span>
              </p>
              <p>
                Tem depressão? <span>{petInfo.petDepression}</span>
              </p>
              <p>
                Tem alergia alimentar? <span>{petInfo.petAllergyFood}</span>
              </p>
              <p>
                Tem alergia à insetos? <span>{petInfo.petAllergyInsect}</span>
              </p>
              <p>
                Tem alergia à químico?{" "}
                <span>{petInfo.petAllergyChemistry}</span>
              </p>
              <p>Observações:</p>
              <div>{petInfo.petComments}</div>
            </ContainerMaisInfo>
          </ContainerInfo>
        ))}
      </ContainerPetInfo>
    </>
  );
};
