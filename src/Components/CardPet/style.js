import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 150px 0;
  background-color: #fffacd;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  padding: 20px;
  border: 6px solid #b0e0e6;
  border-radius: 40px;
  align-items: center;
  white-space: normal;
  justify-content: space-evenly;
  margin-bottom: 20px;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 865px) {
    width: 500px;
    height: 500px;
    border: 10px solid #b0e0e6;
  }

  .imgPet {
    position: absolute;
    top: -85px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: white;
    border: 6px solid #b0e0e6;
    @media screen and (min-width: 865px) {
      top: -120px;
      width: 200px;
      height: 200px;
      border: 10px solid #b0e0e6;
    }
  }

  .infoPet {
    margin-top: 60px;
    h4 {
      text-align: center;
    }
    p {
      margin-left: 20px;
      font-size: 13px;
      @media screen and (min-width: 865px) {
        width: 450px;
        font-size: 16px;
      }
    }

    .buttonContainer {
      display: flex;
      justify-content: center;
      button {
        background-color: #d8bfd8;
        color: black;
        font-weight: bolder;
        margin-top: 10px;
      }
    }
  }
  :hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.3), 0 24px 46px rgba(0, 0, 0, 0.3);
    transition: all ease 0.3s;
  }
`;
