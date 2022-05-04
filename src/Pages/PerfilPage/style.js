import styled from "styled-components";

export const Container = styled.div`
  padding-top: 150px;
  background-color: #ffffe0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const Editar = styled.button`
  border: 3px solid #d8bfd8;
  border-radius: 8px;
  background-color: bisque;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-self: flex-end;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  :hover {
    filter: brightness(1.05);
  }
  :active {
    filter: brightness(1.1);
  }
  .Icon {
    width: 20px;
    height: 20px;
    color: indianred;
    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CardPerfil = styled.div`
  width: 50%;
  background-color: #e6e6fa;
  border: 5px solid #d8bfd8;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding-top: 15px;
  @media (min-width: 768px) {
    border: 10px solid #d8bfd8;
  }

  .Name {
    margin-top: 30px;
    font-size: 20px;
    @media (min-width: 768px) {
      margin-top: 50px;
      font-size: auto;
    }
  }
  .infoContainer {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
    .leftContainer {
      p {
        margin-top: 40px;
        font-weight: bolder;
        font-size: 10px;
        @media (min-width: 768px) {
          margin: 40px 0;
          font-size: 16px;
        }
      }
    }
    .rightContainer {
      p {
        margin-top: 40px;
        font-weight: bolder;
        font-size: 10px;

        @media (min-width: 768px) {
          margin: 40px 0;
          font-size: 16px;
        }
      }
    }
  }
`;

export const ImgContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: green;
  border-radius: 100%;
  border: 5px solid #d8bfd8;
  @media (min-width: 768px) {
    border: 10px solid #d8bfd8;
    height: 200px;
    width: 200px;
  }
`;
