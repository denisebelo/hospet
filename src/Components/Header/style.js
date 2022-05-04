import styled from "styled-components";

export const HeaderContent = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100px;

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 2;

  .ContainerButtons {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-evenly;

    @media (min-width: 700px) {
      flex-direction: row;
      width: 50%;
    }

    button {
      font-size: 16px;
      border: none;
      background-color: rgba(255, 255, 255, 0);
      color: white;
      font-weight: bolder;
      padding: 10px;
      :hover {
        color: #79819d;
        transition: 0.5s;
      }
      @media (min-width: 700px) {
        font-size: 20px;
      }
    }
  }
  img {
    width: 100px;
    @media (min-width: 700px) {
      width: 220px;
    }
  }
`;

export const NavContainer = styled.nav`
  list-style-type: none;
  padding: 0;
  font-size: 12px;
  @media (min-width: 700px) {
    font-size: 14px;
  }

  .container {
    border: 5px solid #d8bfd8;
    background: bisque;
    border-radius: 20px;
    height: 73px;
    :hover {
      border-top: 5px solid #d8bfd8;
      border-radius: 20px 20px 0px 0px;
      border-left: 5px solid #d8bfd8;
      border-right: 5px solid #d8bfd8;
    }
  }

  ul li {
    display: inline;
    position: relative;
    color: black;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    width: 130px;
    transition: background 1s;
    @media (min-width: 700px) {
      width: 170px;
    }
  }

  ul li ul li {
    border-radius: 10px;
  }

  ul li ul li:hover {
    background-color: #deb887;
  }

  /*sub menu*/
  ul.itemsContainer {
    display: none;
    position: absolute;
    left: -5px;
    top: 50px;
    width: 140px;
    background: bisque;
    border-radius: 0px 0px 20px 20px;
    border-bottom: 5px solid #d8bfd8;
    border-left: 5px solid #d8bfd8;
    border-right: 5px solid #d8bfd8;
    text-align: center;
    @media (min-width: 700px) {
      width: 180px;
    }
  }

  .navMenuOption {
    color: black;
  }
  .logOutButton {
    font-weight: bolder;
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    background-color: #d8bfd8;
    color: black;
  }

  ul li:hover ul {
    display: block;
    padding-right: 5px;
  }
`;
