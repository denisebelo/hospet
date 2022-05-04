import styled from "styled-components";

export const MainDashboardClient = styled.main`
  background-color: #ffffe0;
  padding-top: 100px;
  min-height: 100vh;

  h2 {
    margin: 0 20px;
    padding: 10px;
    font-size: 1.1rem;
  }

  img.dog {
    display: none;
  }

  @media screen and (min-width: 767px) {
    h2 {
      margin: 0 60px;
    }

    img.dog {
      display: block;
      width: 200px;
      margin: 0 60px;
    }
  }
`;

export const States = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px auto;
  padding: 10px;
  align-items: center;
  justify-content: center;

  button {
    width: 50px;
    background-color: #79819d;
    color: #ffffff;
    height: 40px;
    padding: 10px;
    margin: 5px;
    border-radius: 30px;
    border: 1px solid #79819d;

    :hover {
      cursor: pointer;
      background-color: #243570;
    }

    @media screen and (min-width: 800px) {
      button {
        width: 60px;
      }
    }
  }
`;

export const HostPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  flex-wrap: wrap;
  max-width: 1378px;
  margin: 0 auto;
`;

export const NoHosts = styled.div`
  width: 100%;
  padding: 20px;
  margin: 20px;

  h2 {
    width: 300px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    font-size: 0.9rem;
    color: #ffffff;
    background-color: lightcoral;
  }

  @media screen and (min-width: 800px) {
    h2 {
      margin: 0 40px;
    }
  }
`;
