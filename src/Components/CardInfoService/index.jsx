import { Button } from "@material-ui/core";
import { useUserInfo } from "../../Providers/infoProvider";
import api from "../../Services";
import toast from "react-hot-toast";
import {
  Buttons,
  ContainerCard,
  ContainerImageAndText,
  ContainerButtons,
  ImageCard,
  TextCard,
} from "./style";
import { useState } from "react";
import ModalComponent from "../Modal";
import { ModalInfoPet } from "../ModalInfoPet";
import { useServices } from "../../Providers/Services";

export const CardInfoService = ({ infoClient, key }) => {
  const [openContactUsModal, setOpenContactUsModal] = useState();

  const { deleteServices } = useServices();

  const { user } = useUserInfo();

  return (
    <>
      <ContainerCard>
        <ContainerImageAndText>
          <ImageCard />
          <TextCard>
            <ul key={key}>
              <li>Nome: {infoClient.name}</li>
              {infoClient.pets.map((infoPet) => (
                <li>Pet: {infoPet.petName}</li>
              ))}
            </ul>
          </TextCard>
        </ContainerImageAndText>

        <ContainerButtons>
          <Buttons>
            <Button
              size="small"
              variant="contained"
              className="aceitar buttonStyle"
            >
              Aceitar
            </Button>

            <Button
              size="small"
              variant="contained"
              className="recusar buttonStyle"
            >
              Recusar
            </Button>
            <ModalComponent
              openModal={openContactUsModal}
              setOpenModal={setOpenContactUsModal}
            >
              <ModalInfoPet infoClient={infoClient} />
            </ModalComponent>

            <Button
              size="small"
              variant="contained"
              className="aceitar buttonStyle"
              onClick={() => setOpenContactUsModal(true)}
            >
              Ver Mais
            </Button>
          </Buttons>
        </ContainerButtons>
      </ContainerCard>
    </>
  );
};
