import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Text, AA, Form } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const Signup: React.FC = () => {
  async function handleSubmit(data: SignUpFormData) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Text>
          <strong>Crie sua conta</strong>
          <span> E comece a treinar agora mesmo</span>
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

            <Button type="submit" kappa="form">
              Criar Conta
            </Button>
          </Form>
        </AA>
      </Content>
    </Container>
  );
};

export default Signup;
