import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import SigninBackgroundImg from '../../assets/background-signup.png';

export const Container = styled.div`
  width: 100vw;
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
  align-items: center;
  justify-content: center;
  place-content: center;
  margin-bottom: 20px;
  margin-left: 10%;

  strong {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #545451;
  }
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
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
