import styled from "styled-components";

export const ContainerRegisterPet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--branco);

  .text-error {
    display: block;
    font-size: 11px;
    color: red;
  }

  h2 {
    margin: 10px 0px;
    color: var(--cinza);
    font-size: 1.1rem;
  }

  h5 {
    margin: 0.8rem;
    color: var(--cinza);
  }

  .input {
    border-radius: 5px;
    border: 2px solid var(--footer);
    text-align: center;
    padding: 3px;
    color: var(--cinza);
  }

  .selected {
    border-radius: 5px;
    border: 2px solid var(--footer);
    text-align: center;
    padding: 3px;
    background-color: var(--branco);
    color: var(--cinza);
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  gap: 5rem;

  img {
    width: 80px;
    position: relative;
    top: 105px;
    animation: 3s move;

    @keyframes move {
      from {
        top: 400px;
      }
      to {
        top: 105px;
      }
    }
  }

  img:nth-child(2) {
    width: 125px;
    position: relative;
    top: 105px;

    animation: 3s move;

    @keyframes move {
      from {
        top: 400px;
      }
      to {
        top: 105px;
      }
    }
  }

  @media (min-width: 768px) {
    gap: 22rem;
  }
`;

export const Form = styled.form`
  border: 5px solid var(--footer);
  z-index: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px 10px;
  max-width: 600px;
  margin: 95px 10px 52px;
  background-color: var(--backgroundForm);
`;

export const ContainerInfoPet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  input {
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const ContainerMoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const ContainerSickAndAllergyPet = styled.div`
  border: 2px solid var(--footer);
  z-index: 1;
  border-radius: 10px;
  background-color: var(--backgroundForm);
  width: 95%;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .select-disease {
    width: 100px;
    @media (min-width: 768px) {
      width: 90px;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const ContainerIllnessPet = styled.div`
  width: 80%;
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .select-disease {
    width: 100px;
    @media (min-width: 768px) {
      width: 90px;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerAllergyPet = styled.div`
  width: 80%;
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  select:nth-child(2) {
    margin: 0 1.1rem;
  }

  select:nth-child(3) {
    margin: 0 1.1rem 0 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerCommentsPet = styled.div`
  width: 80%;
  text-align: left;

  .sozinho {
    display: none;
  }

  h5 {
    margin: 3px 0px;
  }

  span {
    font-size: 11px;
    font-weight: bold;
  }

  textarea {
    text-align: left;
    width: 100%;
    padding: 5px;
    border: 2px solid var(--footer);
    color: var(--cinza);
  }
`;

export const SendButton = styled.button`
  margin-top: 20px;
  border: 3px solid var(--footer);
  border-radius: 10px;
  padding: 6px 25px;
  color: var(--cinza);

  &:hover {
    background-color: var(--footer);
    color: var(--branco);
    transition: 0.5s;
  }
`;

export const ContainerError = styled.div`
  width: 50%;

  input,
  select {
    margin: 0.8rem;
  }

  .input-name {
    width: 80%;
  }

  .input-raca {
    width: 80%;
  }

  .input-age {
    width: 80%;
  }

  .input-especie {
    width: 80%;
  }

  .select-gender {
    width: 80%;
  }

  .select-castrated {
    width: 80%;
  }

  .select-toy {
    width: 80%;
  }

  .select-food {
    width: 80%;
  }
`;
