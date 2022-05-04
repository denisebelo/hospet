import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CardInfoService } from "../../Components/CardInfoService";
import { useUserInfo } from "../../Providers/infoProvider";
import api from "../../Services";
import RegisterHostInfo from "../Register/Host";
import ModalComponent from "../../Components/Modal";
import {
  Buttons,
  ContainerCard,
  ContainerCardInfoService,
  ContainerCompleteYourProfile,
  ContainerDashboard,
  ContainerTextAndButton,
} from "./style";
import { useHistory } from "react-router";

const DashboardHost = ({ authenticated }) => {
  const history = useHistory();
  const { user } = useUserInfo();

  if (authenticated === false) {
    history.push("/login");
  }

  if (user.host === false) {
    history.push("/dashboardClient");
  }

  const token = JSON.parse(localStorage.getItem("@capstone:token"));

  const [openHostInfoModal, setOpenHostInfoModal] = useState(false);

  const [idClient, setIdClient] = useState([]);

  const [infoClient, setInfoClient] = useState([]);

  const handleClients = () => {
  
    if (user.services !== "") {
      setTimeout(() => toast.success("Clientes carregados com sucesso!"), 1000);
      setIdClient(user.services.map((id) => id.clientId));
    } else {
      toast.error("Você ainda não tem clientes!");
    }
  };

  useEffect(() => {
    if (idClient.length > 0) {
      const arr = [];

      idClient.map((infoUser) => {
        api
          .get(`/users/${infoUser}`, {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          })
          .then((response) => {
            toast.success("Deu bom");
            arr.push(response.data);
          })
          .catch((err) => toast.error("Deu ruim"));
      });

      setTimeout(() => setInfoClient(arr), 1000);
    }
  }, [idClient]);

  return (
    <ContainerDashboard>
      {user.accept === true ? (
        <div>
          <ContainerCompleteYourProfile>
            <ContainerTextAndButton>
              <p>
                Um perfil completo sempre ficará no topo das buscas dos clientes
                nao perca tempo complete seu perfil agora mesmo
              </p>
              <Buttons>
                <ModalComponent
                  openModal={openHostInfoModal}
                  setOpenModal={setOpenHostInfoModal}
                >
                  <RegisterHostInfo />;
                </ModalComponent>
                <Button
                  size="large"
                  variant="contained"
                  className="aceitar buttonStyle"
                  onClick={() => setOpenHostInfoModal(true)}
                >
                  Complete seu perfil
                </Button>
              </Buttons>
            </ContainerTextAndButton>
          </ContainerCompleteYourProfile>
          <ContainerCardInfoService>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleClients}
            >
              Solicitações pendentes
            </Button>
            <h2>Solicitações</h2>
            <ContainerCard>
              {infoClient.map((infoClient) => (
                <CardInfoService key={infoClient.id} infoClient={infoClient} />
              ))}
            </ContainerCard>
          </ContainerCardInfoService>
        </div>
      ) : (
        <h1 style={{ marginTop: "150px", textAlign: 'center' }}>
          Você ainda nao foi aprovado pelos nossos administradores
        </h1>
      )}
    </ContainerDashboard>
  );
};

export default DashboardHost;
