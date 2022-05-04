import styled from "styled-components";

export const ContainerForm = styled.div`
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

  img {
    width: 80px;
    position: relative;
    top: 60px;
    animation: 2s move;

    @keyframes move {
      from {
        top: 133px;
      }
      to {
        top: 58px;
      }
    }
  }

  h2 {
    margin: 10px 0px;
    color: var(--cinza);
    font-size: 1.1rem;
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

  .sub-text{
    margin-top: 25px;
    color: var(--cinza);
    a:hover{
      color: red;
      transition: 0.5s;
    }
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
  padding: 60px 10px;
  max-width: 600px;
  margin: 50px 10px;
  background-color: var(--backgroundForm);
`;

export const ContainerPessoais = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  .input-cpf {
    width: 50%;
  }
  .input-age {
    width: 30%;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  input {
    width: 100%;
    margin: 5px 0px;
  }
`;

export const ContainerEndereco = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  .container-street {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;

    .input-street {
      width: 70%;
    }

    .input-number {
      width: 20%;
    }
  }

  .container-state {
    display: flex;
    justify-content: space-between;

    .input-cep {
      width: 30%;
    }

    .input-state {
      width: 25%;
    }

    .input-city {
      width: 35%;
    }
  }
`;

export const ContainerHost = styled.div`
  text-align: left;

  /* .host{
    display: none;
  } */

  .sozinho{
    display: none;
  }

  h3 {
    margin: 10px 0px;
  }

  span {
    font-size: 11px;
    font-weight: bold;
  }

  textarea {
    text-align: left;
    width: 100%;
    line-height: 1.2rem;
    padding: 5px;
    border: 2px solid var(--footer);
    color: var(--cinza);
  }
`;

export const SendButton = styled.button`
  margin-top: 20px;
  border: 3px solid var(--footer);
  border-radius: 10px;
  padding: 8px 30px;
  color: var(--cinza);

  font-size: 20px;

  &:hover {
    background-color: var(--footer);
    color: var(--branco);
    transition: 0.5s;
  }
`;
