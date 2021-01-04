import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  IsFilled?: boolean;
  isErrored?: boolean;
  kappa?: string;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(74, 74, 74, 0.35);
  border-radius: 10px;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  border: 2px solid rgba(74, 74, 74, 0.35);
  color: #666360;

  & + div {
    margin-top: 24px;

  }

  ${props =>
    props.kappa === 'news' &&
    css`
      border: none;
      border-radius: 0px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      input {
        border: none;
      }
    `}


  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}


  ${props =>
    props.isFocused &&
    css`
      color: #ff2d55;
      border-color: #ff2d55;
    `}

  ${props =>
    props.IsFilled &&
    css`
      color: #ff2d55;
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-family: Roboto;
font-style: normal;
font-weight: normal;

    &::placeholder {
      color: #666360;
      font-family: Roboto;
font-style: normal;
font-weight: normal;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &&::before {
      border-color: #c53030 transparent;
    }
  }
`;
