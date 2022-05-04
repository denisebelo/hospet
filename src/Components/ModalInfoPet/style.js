import styled, { keyframes } from "styled-components";

export const slowAnimation = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const ContainerPetInfo = styled.div`
  background-color: #e6e6fa;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  overflow: auto;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-width: 30%;
  max-width: 90%;
  height: 75vh;
  position: absolute;
  top: 60%;
  left: 50%;
  font-size: 10px;
  transform: translate(-50%, -50%);
  animation: ${slowAnimation};
  animation-duration: 0.4s;

  @media (min-width: 600px) {
    max-width: 70%;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 80px;
    position: relative;
    top: 28px;
    z-index: 100;
  }

  img:nth-child(2) {
    width: 125px;
    position: relative;
  }

  @media (min-width: 768px) {
    gap: 7rem;
  }

  @media (min-width: 1024px) {
    gap: 15rem;
  }
`;

export const ContainerInfo = styled.form`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  border: 5px solid var(--footer);
  z-index: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px 10px;
  background-color: var(--backgroundForm);

  h1 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

export const ContainerMaisInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-weight: bold;
    font-size: 0.6rem;
    margin: 0.3rem;

    span {
      font-weight: normal;
    }
  }

  div {
    text-align: left;
    width: 100%;
    height: 5rem;
    padding: 5px;
    border: 2px solid var(--footer);
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 0.9rem;
      margin: 0.3rem;
    }
  }
`;
