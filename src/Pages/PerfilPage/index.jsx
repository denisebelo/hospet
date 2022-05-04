import { Container, CardPerfil, ImgContainer } from "./style";

import { useUserInfo } from "../../Providers/infoProvider";

const PerfilPage = () => {
  const { user } = useUserInfo();
  return (
    <>
      <Container>
        <CardPerfil>
          <ImgContainer />
          <h1 className="Name">{user.name}</h1>
          <div className="infoContainer">
            <div className="leftContainer">
              <p>Email: {user.email}</p>
              <p>Rua: {user.streetName}</p>
              <p>Cidade: {user.city}</p>
            </div>
            <div className="rightContainer">
              <p>Celular: {user.cellPhone}</p>
              <p>N° {user.numberHouse}</p>
              <p>Estado: {user.state}</p>
            </div>
          </div>
        </CardPerfil>
      </Container>
    </>
  );
};

export default PerfilPage;
