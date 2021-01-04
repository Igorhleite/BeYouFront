import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiSend } from 'react-icons/fi';
import CountUp from 'react-countup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Counters,
  Container,
  Content,
  Text,
  AA,
  Form,
  TextArea,
  MaxContainer,
  NewsLatter,
  NewsLatterForm,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const Join: React.FC = () => {
  async function handleSubmit(data: SignUpFormData) {
    console.log(data);
  }

  return (
    <MaxContainer>
      <Container>
        <Content>
          <Text>
            <strong>Seja nosso parceiro</strong>
            <span>Juntos levaremos o esporte a um outro nível</span>
          </Text>
          <AA>
            <Form onSubmit={handleSubmit}>
              <Input icon={FiUser} name="name" type="name" placeholder="Nome" />
              <Input
                icon={FiMail}
                name="email"
                type="email"
                placeholder="E-mail"
              />
              <Input
                icon={FiLock}
                name="password"
                type="password"
                placeholder="Senha"
              />

              <Button type="submit" kappa="signin">
                Criar Conta
              </Button>
            </Form>
          </AA>
        </Content>
      </Container>
      <TextArea>
        <div>
          <strong>
            Você sabia que
            <b> 60% das pessoas </b>
            irão treinar em casa a partir de agora?
          </strong>
        </div>

        <Counters>
          <div>
            <b>
              <CountUp end={658712} separator="." duration={3} />
            </b>
            <br />
            Potênciais Clientes
          </div>
          <div>
            <b>
              <CountUp end={24} separator="." duration={3} />
            </b>
            <br />
            Modalidades
          </div>
          <div>
            <b>
              <CountUp end={1234} separator="." duration={3} />
            </b>
            <br />
            Novos Contatos
          </div>
        </Counters>

        <NewsLatter>
          <div>
            <span>Seja um dos nossos primeiros parceiros</span>
          </div>
          <NewsLatterForm onSubmit={handleSubmit}>
            <Input
              kappa="news"
              type="news"
              placeholder="Seu melhor e-mail"
              name="news"
            />
            <Button kappa="news" type="submit">
              <FiSend />
            </Button>
          </NewsLatterForm>
        </NewsLatter>
      </TextArea>
    </MaxContainer>
  );
};

export default Join;
