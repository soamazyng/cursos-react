import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import Loading from '../../components/Loading/Loading';

import api from '../../services/api';

import { Container, Content, Background } from './SignUp.Style';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // recupera o contexto
  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  // envia o formulário
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      formRef.current?.setErrors({});
      setLoading(true);
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail deve ser válido'),
          password: Yup.string().min(6, 'Deve ter no minímo de 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // cadastra
        await api.post('/users', data);
        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso.',
          description: 'Você já pode fazer seu logon no GoBarber',
        });
        history.push('/');
        setLoading(false);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }

        // toast será disparado aqui
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao realizar o cadastro.',
        });

        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">{loading ? <Loading /> : 'Cadastrar'}</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para Logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
