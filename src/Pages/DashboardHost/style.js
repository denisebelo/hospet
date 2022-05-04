import styled from "styled-components";

export const ContainerDashboard = styled.section`
  padding: 6rem 0;
  background-color: #fffacd;
  min-height: 100vh;
`;

export const ContainerCompleteYourProfile = styled.div`
  background-color: #fffacd;
`;

export const ContainerTextAndButton = styled.div`
  padding: 2rem;
  margin: 0 auto;

  p {
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
  }

  @media (min-width: 1024px) {
    width: 55rem;
  }
`;

export const Buttons = styled.div`
  margin: 0 auto;
  align-content: end;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .buttonStyle {
    width: 80vw;
    font-weight: bolder;
    margin-top: 1rem;
    border: 0.3rem solid #d8bfd8;
    border-radius: 18px;
    font-family: "Autour One", cursive;
    font-weight: 100;
  }

  .aceitar {
    background-color: #b0e0e6;
    color: black;

    :hover {
      background-color: #b0e0e6;
      filter: brightness(1.2);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    .buttonStyle {
      width: 20rem;
    }
  }
`;

export const ContainerCardInfoService = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #e0ffff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  h2 {
    margin: 1rem;
  }

  div {
    display: flex;
  }
`;

export const ContainerCard = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
