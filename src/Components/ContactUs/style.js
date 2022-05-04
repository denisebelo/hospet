import styled, { keyframes } from "styled-components";

const slowAnimation = keyframes`
    from {
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

const ContactUsContainer = styled.div`
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
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 10px;
  transform: translate(-50%, -50%);
  animation: ${slowAnimation};
  animation-duration: 0.4s;

  .profileCard {
    text-align: center;
  }

  h1 {
    margin-block-start: 10px;
    margin-block-end: 15px;
    font-size: 32px;
    font-family: "Dancing Script", cursive;

    :hover {
      cursor: pointer;
      color: #f24464;
    }
  }

  .perfilImg {
    width: 100px;
    height: 100px;
    padding: 0;
    border-radius: 100%;
  }

  h2 {
    margin-block: 10px;
  }

  h4 {
    font-weight: normal;
    font-size: 12px;
    margin-block-end: 10px;
  }

  @media (min-width: 600px) {
    max-width: 70%;

    h4 {
      font-size: 16px;
    }
  }
`;

export default ContactUsContainer;
