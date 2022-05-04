import styled from "styled-components";

export const ContainerCard = styled.section`
  margin: 1.2rem auto;
  width: 80vw;
  height: 60vh;
  border: 0.2rem solid #d8bfd8;
  border-radius: 0.3rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    width: 35rem;
    height: 32vh;
    flex-direction: row;
  }
`;

export const ContainerImageAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;

  h4 {
    margin-top: 0.5rem;
  }
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

  .buttonStyle {
    font-weight: bolder;
    margin-top: 1rem;
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

  .button-desktop {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    .button-desktop {
      display: block;
    }

    .button-mobile {
      display: none;
    }
  }
`;
