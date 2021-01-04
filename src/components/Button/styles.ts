import styled, { css } from 'styled-components';
import { shade, transparentize } from 'polished';

interface ButtonProps {
  kappa?: string;
}

export const Container = styled.button<ButtonProps>`
  background: #ff2d55;
  width: 110px;
  height: 30px;
  border: none;
  box-sizing: border-box;
  border-radius: 20px;
  transition: 0.2s;
  margin: 0 16px 0 0;

  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #ffff;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${shade(0.2, '#ff2d55')};
  }

  ${props =>
    props.kappa === 'signin' &&
    css`
      margin: 14px 0 0 0;

      background: transparent;
      color: #ffffff;
      border-radius: 10px;

      &:hover {
        background: ${shade(0.1, '#ff2d55')};
      }
    `}


    ${props =>
      props.kappa === 'form' &&
      css`
        margin: 14px 0 0 0;
        width: 100%;
        height: 45px;
        background: #ff2d55;
        color: #ffffff;
        border-radius: 10px;

        &:hover {
          background: ${shade(0.1, '#ff2d55')};
        }
      `}


  ${props =>
    props.kappa === 'info' &&
    css`
      border-radius: 0;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    `}


    ${props =>
      props.kappa === 'news' &&
      css`
        border-radius: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: none;
        height: 47px;
        min-width: 30%;
      `}
`;
