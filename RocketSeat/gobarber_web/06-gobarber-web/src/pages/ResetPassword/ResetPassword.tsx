import React, { useCallback, useRef, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

import { Container, Content, Background } from './ResetPassword.style';

import api from '../../services/api';

interface FormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  // recupera o contexto
  const { addToast } = useToast();

  // envia o formulário
  const handleSubmit = useCallback(
    async (data: FormData) => {
      formRef.current?.setErrors({});
      setLoading(true);
      try {
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .oneOf(
              [Yup.ref('password'), null],
              'A confirmação de senha deve ser igual a senha',
            )
            .required('Confirmar senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        // api aqui
        await api.post('password/reset', {
          password,
          password_confirmation,
          token,
        });

        await history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        // toast será disparado aqui
        addToast({
          type: 'error',
          title: 'Erro na resetar senha',
          description: 'Ocorreu um erro ao resetar senha.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, setLoading, history, location],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Redefinir Senha</h1>
          <Input
            name="password"
            type="password"
            placeholder="Nova Senha"
            icon={FiLock}
          />
          <Input
            name="password_confirmation"
            type="password"
            placeholder="Confirme sua senha"
            icon={FiLock}
          />

          <Button loading={loading} type="submit">
            Alterar senha
          </Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
