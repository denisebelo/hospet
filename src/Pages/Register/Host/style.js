import styled, { keyframes } from "styled-components";

const slowAnimation = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const ContainerForm = styled.form`
  background-color: #e6e6fa;

  border-radius: 5px;

  padding: 15px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 70%;
  height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 10px;
  transform: translate(-50%, -50%);
  animation: ${slowAnimation};
  animation-duration: 0.4s;

  .text-error {
    color: #f24464;
    width: 100%;
    align-items: center;
    display: block;
  }

  h2 {
    text-align: center;
    color: #000000;
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    padding: 15px;

    :hover {
      cursor: pointer;
      color: #f24464;
    }
  }
  div {
    padding-top: 10px;

    text-align: left;
  }
  input,
  select {
    border-radius: 5px;
    margin-left: 5px;
    text-align: center;
    :hover {
      cursor: pointer;
      color: #f24464;
    }
  }

  .button {
    margin-top: 10px;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
  }
  button {
    width: 30%;
    height: 100%;
    border-radius: 5px;

    font-size: 16px;
    font-family: Autour One, cursive;

    :hover {
      cursor: pointer;
      color: #f24464;
      border-color: #f24464;
    }
  }
  @media (max-width: 600px) {
    align-items: center;

    max-width: 95%;
    text-align: center;
    height: 95%;
    position: fixed;
    font-size: 20px;

    div {
      margin-top: 10px;
      padding-top: 10px;
      flex-direction: column;
      text-align: center;
    }
    .button {
      width: 100%;
      height: 100%;
    }
    button {
      width: 40%;
      height: 50px;
    }

    h2 {
      font-size: 36px;
    }

    input,
    select {
      border-radius: 5px;
      height: 50px;
      width: 250px;
      font-size: 20px;
    }
  }
`;
