import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffe0;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  height: 50vh;
`;

export const TopContainer = styled.div`
  clear: both;
  height: 400px;
  text-align: center;

  .cat {
    height: 450px;
  }

  img {
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .typing h1 {
    font-family: "Dancing Script", cursive;
    font-size: 60px;
  }
  .typing {
    position: relative;
    bottom: 250px;
    color: white;
    text-shadow: -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000,
      1px 0px 0px #fff;
    font-family: monospace;
    overflow: hidden;
    border-right: 0.15em solid #00d8ff;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(30, end),
      blink-animation 0.5s step-end infinite;

    @media (max-width: 600px) {
      h1 {
        font-size: 24px;
      }
      bottom: 80px;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 60%;
    }
  }

  @keyframes blink-animation {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #00d8ff;
    }
  }

  @media (max-width: 600px) {
    height: 200px;
    .cat {
      width: 100%;
      height: 200px;
    }
  }
`;

export const InfoContainer = styled.div`
  background-color: #e6e6fa;
  width: 100%;
  margin-top: 100px;
  flex-wrap: wrap;

  h2 {
    font-family: "Dancing Script", cursive;
    cursor: pointer;
    padding: 20px;
    text-align: center;
    font-size: 40px;

    :hover {
      color: #333;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 50px;

    h2 {
      font-size: 20px;
    }
  }
`;

export const InfoPictures = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;

  img {
    width: 15vw;
    cursor: pointer;

    :hover {
      animation: shake 0.5s;

      @keyframes shake {
        0% {
          transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
          transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
          transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
          transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
          transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
          transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
          transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
          transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
          transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
          transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
          transform: translate(1px, -2px) rotate(-1deg);
        }
      }
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    font-size: 12px;
    text-align: center;

    img {
      text-align: center;
      align-items: center;
      margin: 0 auto;
      padding-bottom: 20px;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FeedContainer = styled.div`
  background-color: #ffffe0;
  padding-top: 50px;
  height: 450px;

  img {
    background-color: #ffffe0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 40%;
  }
`;

export const CardContainer = styled.div`
  font-family: "Dancing Script", cursive;
  color: #000000;
  margin: 0 auto;
  background-color: transparent;
  font-size: 36px;
  width: 90%;
  height: 200px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 300px;

  .aboutUs {
    color: black;
    text-shadow: -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #000,
      1px 0px 0px #fff;
  }

  :hover {
    color: #333;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
