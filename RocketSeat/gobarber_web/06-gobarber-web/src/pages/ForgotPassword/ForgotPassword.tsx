import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

import api from '../../services/api';

import { Container, Content, Background } from './ForgotPassword.style';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  // recupera o contexto
  const { addToast } = useToast();

  // envia o formulário
  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      formRef.current?.setErrors({});
      setLoading(true);
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail deve ser válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // send to api
        await api.post('/password/forgot', { email: data.email });
        // toast será disparado aqui
        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado com sucesso.',
          description:
            'Enviamos um e-mail para confirmar a recuperação de senha, verique sua caixa de entrada.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }

        // toast será disparado aqui
        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao recuperar sua senha, verifique seu e-mail.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, setLoading],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>
          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

          <Button loading={loading} type="submit">
            Recuperar
          </Button>
        </Form>

        <Link to="/">
          <FiLogIn />
          Faça seu logon
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
