import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

import api from '../../services/api';

import { Container, Content } from './Profile.Style';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // recupera o contexto
  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  // envia o formulário
  const handleSubmit = useCallback(
    async (data: FormData) => {
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
          return;
        }

        // toast será disparado aqui
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao realizar o cadastro.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, setLoading],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Meu perfil</h1>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button loading={loading} type="submit">
            Confirmar mudanças
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
