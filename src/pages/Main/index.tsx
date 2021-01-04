import React from 'react';
import {
  Container,
  Header,
  ButtonMenu,
  Content,
  ContentTwo,
  Bottom,
} from './styles';
import Button from '../../components/Button';
import ImgWoman from '../../assets/g10.png';
import Steps from '../../assets/steps.svg';
import Phone from '../../assets/phone.png';
import ImgBottom from '../../assets/bottom.svg';

const Main: React.FC = () => (
  <>
    <Container>
      <Header>
        <a href="/">Ajuda</a>
        <a href="/">Seja Parceiro</a>
      </Header>
      <ButtonMenu>
        <Button kappa="signout">Criar conta</Button>

        <Button kappa="signin">Login</Button>
      </ButtonMenu>
      <span>
        <h1>Transforme-se em sua MELHOR VERSÃO</h1>

        <Button kappa="info">Saiba mais</Button>
      </span>
    </Container>
    <Content>
      <img src={ImgWoman} alt="Woman" />

      <div>
        <strong>Diversas modalidades</strong>
        <p>
          Aqui VOCÊ escolhe a modalidade, NÓS te mostramos os experts no
          assunto!
        </p>
        <strong>Em qualquer lugar a qualquer momento</strong>
        <p>
          Torne aquela horinha de almoço produtiva! A qualquer horário um
          profissionalpronto pra te atender!
        </p>
        <strong>Mente sã, corpo são</strong>
        <p>Xô preguiça! Aqui você mantém corpo e mente ativos!</p>
      </div>
    </Content>
    <ContentTwo>
      <div>
        <strong>
          Comece a usar e encontre o profissional ideal
          <span> RÁPIDO E FÁCIL</span>
        </strong>
        <img src={Steps} alt="steps" />
        <span>
          <Button kappa="">Cadastrar</Button>
        </span>
      </div>

      <img src={Phone} alt="phones" />
    </ContentTwo>
    <Bottom>
      <img src={ImgBottom} alt="bottom" />
    </Bottom>
  </>
);

export default Main;
