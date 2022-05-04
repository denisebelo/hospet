import styled from "styled-components";

export const ContainerCards = styled.div`
  padding-top: 100px;
  min-height: 70.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6fa;
  div.petsConteiner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    li {
      margin: 30px;
    }

    .noPets {
      display: flex;
      h1 {
        text-align: center;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: #e6e6fa;

  .containerButtons {
    display: flex;
    justify-content: center;
    padding: 30px;

    .buttonStyle {
      color: black;
      font-weight: bolder;
      margin: 10px;
    }
    .addPet {
      background-color: #b4d6ad;
    }
    .toTop {
      background-color: #b0e0e6;
    }
  }
`;
