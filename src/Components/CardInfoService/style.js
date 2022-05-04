import styled from "styled-components";

export const ContainerCard = styled.section`
  width: 80vw;
  padding: 1.5rem;
  margin: 0.5rem;
  border: 0.2rem solid #d8bfd8;
  border-radius: 0.3rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 35rem;
    flex-direction: row;
  }
`;

export const ContainerImageAndText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const ImageCard = styled.img`
  border: 0.2rem solid #d8bfd8;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

export const TextCard = styled.div`
  margin: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;

  ul {
    list-style: none;
  }

  li {
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 1rem;
  }
`;

export const ContainerButtons = styled.div``;

export const Buttons = styled.div`
  align-content: end;
  justify-content: center;
  display: flex;
  flex-direction: column;

  button {
    margin: auto 1rem;
  }

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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
