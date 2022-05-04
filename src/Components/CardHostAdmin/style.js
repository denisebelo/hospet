import styled from "styled-components";

export const ContainerCard = styled.section`
  margin: 1.2rem auto;
  width: 80vw;
  height: 50vh;
  border: 0.2rem solid #d8bfd8;
  border-radius: 0.3rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    width: 35rem;
    height: 28vh;
    flex-direction: row;
  }
`;

export const ContainerImageAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ImageCard = styled.img`
  border: 0.2rem solid #d8bfd8;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-bottom: 1.2rem;
`;

export const ContainerTextAndButtons = styled.div`
  width: 80%;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const TextCard = styled.div`
  margin-bottom: 0.5rem;
  height: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 1.5rem;
  }

  p {
    width: 100%;
    font-size: 12px;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 16px;
      text-align: initial;
    }
  }
`;

export const Buttons = styled.div`
  align-content: end;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  .buttonStyle {
    font-weight: bolder;
    margin-bottom: 15px;
  }
  .recusar {
    background-color: #d8bfd8;
    color: black;

    :hover {
      background-color: #d8bfd8;
      filter: brightness(1.2);
    }
  }
  .aceitar {
    background-color: #8fbc8f;
    color: black;

    :hover {
      background-color: #8fbc8f;
      filter: brightness(1.2);
    }
  }
`;
