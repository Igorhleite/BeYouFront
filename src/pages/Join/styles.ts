import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import SigninBackgroundImg from '../../assets/background-join.png';
import JoinBottom from '../../assets/join_bottom.png';

export const MaxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  justify-content: center;
  place-content: center;
`;

export const Container = styled.div`
  width: 50vw;
  height: 100vh;
  flex: 1;
  background: url(${SigninBackgroundImg}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  place-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  place-content: flex-start;

  width: 30%;
  max-width: 420px;
  min-width: 370px;
  padding: 55px 40px;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 60px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  place-content: flex-start;
  margin-bottom: 20px;
  margin-left: 10%;

  strong {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #545451;
  }
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #ff2d55;
  }
`;

export const AA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
`;

export const Form = styled(Unform)`
  input {
    background: transparent;
  }
`;

export const TextArea = styled.div`
  width: 50vw;
  height: 100vh;
  flex: 1;
  flex-direction: column;

  background-color: #ebebeb;
  background-attachment: fixed;
  background-size: 100% 100%;

  display: flex;
  align-items: flex-start;
  place-content: flex-start;

  color: #545451;

  div {
    padding: 60px;
    width: 100%;

    strong {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      b {
        color: #ff2d55;
      }
    }
  }
`;

export const Counters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  place-content: center;

  div {
    text-align: center;
    width: 100%;
    padding: 0;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    b {
      color: #ff2d55;
      font-size: 30px;
    }
  }
`;

export const NewsLatter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;

  div {
    width: 100%;
    text-align: center;
    padding: 16px;
    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const NewsLatterForm = styled(Unform)`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  place-content: center;
`;
