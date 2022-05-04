import sleeping_cat from "../../Assets/img/cat.jpg";
import localization_picture from "../../Assets/img/Find.png";
import schedule_picture from "../../Assets/img/45505 (1).png";
import petStatus_picture from "../../Assets/img/45505 (3).png";
import feedback_image from "../../Assets/img/petcollage.jpg";

import {
  Img,
  TopContainer,
  MainContainer,
  InfoContainer,
  InfoPictures,
  FeedContainer,
  CardContainer,
} from "./style";
const Home = () => {
  return (
    <>
      <MainContainer>
        <TopContainer className="catContainer">
          <div className="cat">
            <img alt="cat" src={sleeping_cat} />
          </div>

          <div className="typing">
            <h1>
              Quer viajar? <br /> Hospede o seu pet aqui!
            </h1>
          </div>
        </TopContainer>

        <InfoContainer>
          <h2> Entenda como o nosso serviço funciona: </h2>
          <InfoPictures>
            <div className="card">
              <img alt="localization" src={localization_picture} />
              <div> Encontre um anfitrião próximo à você </div>
            </div>
            <div className="card">
              <img alt="schedule" src={schedule_picture} />
              <div> Agende a data da hospedagem </div>
            </div>
            <div className="card">
              <img alt="petStatus" src={petStatus_picture} />
              <div> Acompanhe diariamente como está o seu amigo pet </div>
            </div>
          </InfoPictures>
        </InfoContainer>

        <FeedContainer>
          <img alt="dogs" src={feedback_image} />
          <CardContainer>
            <h2> Conheça o Hostpet:</h2>
            <p className="aboutUs">
              Nós entendemos todo o transtorno gerado para quem precisa viajar
              sem animais e não tem alguém de confiança para cuidar do seu
              amiguinho. Encontre conosco hospedagens perfeitamente seguras e
              amorosas, interaja com os anfitriões, realize videchamadas para
              matar a saudade e acompanhar de perto os cuidados com o seu
              querido pet.
            </p>
          </CardContainer>
        </FeedContainer>
      </MainContainer>
    </>
  );
};

export default Home;
