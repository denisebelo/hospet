import styled from "styled-components";

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-end;
  width: 100%;
  height: 100px;
  padding: 15px 0;
  background-color: #d8bfd8;
  margin-block-end: 0px;

  .ContainerLogo {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .FooterLink {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 30px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 15px;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
    color: #000000;
  }

  img.logo {
    width: 100px;
    margin-left: 20px;
    @media (min-width: 600px) {
      width: 180px;
      margin-left: 20px;
    }
  }

  span {
    font-size: 10px;
  }

  @media (min-width: 600px) {
    height: 130px;
    .FooterLink {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-inline-end: 30px;
    }

    img {
      width: 150px;
    }

    span {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`;
