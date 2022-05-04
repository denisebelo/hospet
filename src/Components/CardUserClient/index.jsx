import { EachCard, ContainerInfo, EachInfo } from "./styles";
import personImg from "../../Assets/img/person-icon.png";
import { useEffect, useState } from "react";
import { useUserInfo } from "../../Providers/infoProvider";
import { useToken } from "../../Providers/Token";
import toast from "react-hot-toast";
import { useServices } from "../../Providers/Services";

const CardUserClient = ({ hostId, name, state, description, details }) => {
  const [modalInfo, setModalInfo] = useState(false);

  const token = JSON.parse(localStorage.getItem("@capstone:token"));

  const toggleModal = () => {
    setModalInfo(!modalInfo);
  };

  const { addServices } = useServices();
  const { user } = useUserInfo();

  const clientId = {
    clientId: user.id,
  };

  return (
    <>
      <EachCard>
        <img src={personImg} className="img" />
        <h3>Host: {name}</h3>
        <h4>Estado: {state}</h4>
        {/* <h4>Descrição: {description}</h4> */}
        {/* <h1>{hostId}</h1> */}
        <div>
          <h4 onClick={toggleModal} className="btn-modal seeMore">
            ver mais
          </h4>
        </div>

        {modalInfo && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              {/* <img src={personImg} className="img" /> */}
              <h3>Host: {name}</h3>
              <ContainerInfo>
                {details ? (
                  <>
                    <EachInfo>
                      <h4>Preço: {details.price}</h4>
                    </EachInfo>

                    {/* <EachInfo>
                      <h4>
                        Pode dormir na cama:{" "}
                        {details.sleepInBedAllowed === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo> */}

                    {/* <EachInfo>
                      <h4>Pets em casa: {details.howManyPets}</h4>
                    </EachInfo> */}

                    {/* <EachInfo>
                      <h4>
                        Tenho cães: {details.haveDogs === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo> */}

                    {/* <EachInfo>
                      <h4>
                        Tenho gatos:{" "}
                        {details.haveCats === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo> */}

                    {/* <EachInfo>
                      <h4>
                        Tenho crianças em casa:{" "}
                        {details.haveChildren === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo> */}

                    <EachInfo>
                      <h4>
                        Fumante: {details.smokers === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>
                        Moradia:{" "}
                        {details.typeHouse === "apartment"
                          ? "apartamento"
                          : "casa"}
                      </h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>Quintal: {details.yard === "yes" ? "sim" : "não"}</h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>
                        Aceito:{" "}
                        {details.petSizeAllowed === "small"
                          ? "pequenos"
                          : details.petSizeAllowed === "medium"
                          ? "médios"
                          : details.petSizeAllowed === "large"
                          ? "grandes"
                          : "todos"}
                      </h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>
                        Aceita não castrados:{" "}
                        {details.castratedPetsAllowed === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>
                        Aceita especiais:{" "}
                        {details.especialPetsAllowed === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>
                        Dá medicação:{" "}
                        {details.oralPills === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo>

                    <EachInfo>
                      <h4>
                        Oferece videocall:{" "}
                        {details.videoCall === "yes" ? "sim" : "não"}
                      </h4>
                    </EachInfo>
                  </>
                ) : (
                  <EachInfo>
                    <h4>Sem informações</h4>
                  </EachInfo>
                )}
              </ContainerInfo>

              <button className="close-modal" onClick={toggleModal}>
                fechar
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => addServices(clientId, hostId)}
          className="btn-reserve"
        >
          reservar
        </button>
      </EachCard>
    </>
  );
};

export default CardUserClient;
