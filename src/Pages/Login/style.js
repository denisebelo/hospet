import styled from "styled-components";

export const Form = styled.form`
  border: 5px solid var(--footer);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 30px;
  max-width: 600px;
  margin: 50px 10px;
  background-color: var(--backgroundForm);
  z-index: 2;

  .text-error {
    display: block;
    font-size: 11px;
    color: red;
  }

  div {
    display: flex;
    margin: 15px 0px;
    flex-direction: column;
  }

  button {
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
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  height: 100vh;
  background-color: var(--branco);

  span a{
    :hover{
      color: red;
      transition: 0.5s;
    }
  }

  img {
    width: 150px;
    position: relative;
    top: 104px;
    animation: 2s move;

    @keyframes move {
      from {
        top: 155px;
      }
      to {
        top: 102px;
      }
    }
  }

  .input {
    border-radius: 5px;
    border: 2px solid var(--footer);
    text-align: center;
    padding: 10px 5px;
    color: var(--cinza);
  }
`;
