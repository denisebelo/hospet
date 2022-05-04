import styled from "styled-components";

export const EachCard = styled.div`
  background-color: #e6e6fa;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  width: 350px;
  min-height: 400px;
  border: 8px solid #ffffff;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 10px 20px gray;
  margin: 60px auto;
  font-family: sans-serif;

  :hover {
    background-color: #e6e6fa;
    border: 8px solid gray;
  }

  .img {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translate(50%, -50%);
    width: 100px;
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #79819d;
  }

  h3 {
    padding-top: 10px;
    margin: 60px 10px 10px 5px;
    color: #79819d;
    font-size: 1.6rem;
  }

  h4 {
    padding: 10px;
    margin-bottom: 5px;
    color: gray;
  }

  .seeMore {
    padding: 10px;
    margin: 10px;
    border-bottom: 4px solid gray;
    background-color: transparent;
    transition: all 2s;
    color: #79819d;

    :hover {
      cursor: pointer;
      background-color: lightgray;
      border-bottom: 4px solid gray;
    }
  }

  .btn-modal {
    padding: 10px 20px;
    display: block;
    font-size: 18px;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 5;
    overflow-y: auto;
    border: 3px solid var(--footer);

  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 20px;
    max-width: 1400px;
    min-width: 300px;
    min-height: 300px;
    z-index: 100;
    /* mexendo no overflow */
    overflow-y: auto;
    border: 3px solid var(--footer);
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 15px;
    background-color: #79819d;
    border: none;
    border-radius: 20px;
    color: #ffffff;
    border: 3px solid var(--footer);
  }

  .btn-reserve {
    margin: 20px 0;
    padding: 10px;
    width: 100px;
    background-color: #79819d;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    transition: all 2s;

    :hover {
      cursor: pointer;
      background-color: lightcoral;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

export const EachInfo = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 20px;
  margin: 3px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--footer);
  @media screen and (min-width: 865px) {
    width: 130px;
    height: 100px;
    padding: 10px auto;
    margin: 15px;
  }
`;