import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffe0;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #79819d;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    figure {
      margin: 0;
      img {
        width: 250px;
      }
    }
    h1 {
      color: white;
    }
  }
`;

export const SectionCards = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  width: 95%;
  .cardToApprove {
  }
`;
