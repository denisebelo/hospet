import { Button } from "@material-ui/core";
import toast from "react-hot-toast";
import {
  Buttons,
  ContainerCard,
  ContainerImageAndName,
  ContainerTextAndButtons,
  ImageCard,
  TextCard,
} from "./style";
import api from "../../Services";

const CardHostAdmin = ({ username, description, user, id }) => {
  const token = JSON.parse(localStorage.getItem("@capstone:token"));

  const accepted = (teste) => {
    api
      .patch(
        `/users/${teste.id}`,
        { accept: true },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )
      .then((res) =>
        res.status === 200
          ? toast.success("Anfitrião aceito")
          : toast.error("Erro")
      );
  };

  const denied = (teste) => {
    api
      .patch(
        `/users/${teste.id}`,
        { accept: "no" },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )
      .then((res) =>
        res.status === 200
          ? toast.success("Anfitrião Negado")
          : toast.error("Erro")
      );
  };

  return (
    <ContainerCard>
      <ContainerImageAndName>
        <ImageCard />
        <h3>{username}</h3>
      </ContainerImageAndName>

      <ContainerTextAndButtons>
        <TextCard>
          <p>{description}</p>
        </TextCard>
        <Buttons>
          <Button
            onClick={() => denied(user[id])}
            size="small"
            variant="contained"
            color="secondary"
            className="recusar buttonStyle"
          >
            Recusar
          </Button>
          <Button
            onClick={() => accepted(user[id])}
            size="small"
            variant="contained"
            color="primary"
            className="aceitar buttonStyle"
          >
            Aceitar
          </Button>
        </Buttons>
      </ContainerTextAndButtons>
    </ContainerCard>
  );
};

export default CardHostAdmin;
