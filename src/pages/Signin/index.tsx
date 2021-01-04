import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Text, AA, Form } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const Signin: React.FC = () => {
  async function handleSubmit(data: SignUpFormData) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Text>
          <strong>Login</strong>
        </Text>
        <AA>
          <Form onSubmit={handleSubmit}>
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
              Login
            </Button>
          </Form>
          <a href="/">Esqueci minha senha</a>
          <a href="/signup">
            <FiLogIn />
            Criar conta
          </a>
        </AA>
      </Content>
    </Container>
  );
};

export default Signin;
