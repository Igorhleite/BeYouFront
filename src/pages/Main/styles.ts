import styled from 'styled-components';
import landingBackgroundImg from '../../assets/background-landing.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex: 1;
  background: url(${landingBackgroundImg}) no-repeat center;
  background-size: cover;

  h1 {
    max-width: 700px;
    color: #ffffff;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 94px;
  }
  span {
    position: absolute;
    top: 30%;
    margin-left: 10%;
  }
`;

export const ButtonMenu = styled.div`
  position: absolute;
  top: 10%;
  right: 8%;

  span {
    background: #ff2d55;
    border: none;
    box-sizing: border-box;
    border-radius: 20px;
    transition: 0.2s;
    margin: 0 16px 0 0;
    padding: 10px;
    text-align: center;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffff;
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;

  a {
    color: #ffffff;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    margin: 0 16px 0 0;
  }
`;

export const Content = styled.section`
  background: #ebebeb;
  width: 100vw;
  height: 80vh;
  flex: 1;
  display: flex;
  align-items: center;
  align-content: center;
  overflow-y: hidden;
  justify-content: center;

  img {
    width: 40%;
    height: auto;
    margin-left: 30px;
  }
  div {
    max-width: 40%;
    color: black;
    margin-left: 12%;

    strong {
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 42px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
`;

export const ContentTwo = styled.section`
  background: #ebebeb;
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  > img {
    width: auto;
    height: 80%;
    margin-left: 10%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    max-width: 600px;

    img {
      width: 500px;
      height: auto;
    }
    strong {
      font-family: Roboto;
      font-style: normal;
      font-size: 28px;
      font-weight: 900;
      color: #545451;
      margin-bottom: 24px;
      span {
        color: #ff2d55;
      }
    }
    > span {
      margin-left: 50%;
    }
  }
`;

export const Bottom = styled.section`
  position: absolute;
  background: #ebebeb;

  img {
    width: 100vw;
    height: auto;
  }
`;
