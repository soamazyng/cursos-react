import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

import api from '../../services/api';

import { Container, Content, AvatarInput } from './Profile.Style';
import { useAuth } from '../../hooks/auth';

interface FormData {
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
}

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // recupera o contexto
  const { addToast } = useToast();
  const history = useHistory();
  const { user, updateUser } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();
        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then((response) => {
          addToast({
            type: 'success',
            title: 'Avatar atualizado com sucesso',
          });

          updateUser(response.data);
        });
      }
    },
    [addToast, updateUser],
  );

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
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string()
              .min(6, 'Deve ter no minímo de 6 digitos')
              .required('Senha atual é obrigatória'),
            otherwise: Yup.string,
          }),
          old_password: Yup.string(),
          password_confirmation: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string()
              .min(6, 'Deve ter no minímo de 6 digitos')
              .required('Confirmação de senha é obrigatória')
              .oneOf(
                [Yup.ref('password'), null],
                'A confirmação de senha deve ser igual a senha',
              ),
          }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        // cadastra
        const { data: userData } = await api.put('/profile', formData);
        updateUser(userData);

        addToast({
          type: 'success',
          title: 'Perfil atualizado com sucesso.',
          description: 'As suas informações foram atualizadas com sucesso!',
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        // toast será disparado aqui
        addToast({
          type: 'error',
          title: 'Erro na atualização de perfil',
          description: 'Ocorreu um erro ao realizar a atualização.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, setLoading, updateUser],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>
          <h1>Meu perfil</h1>

          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />

          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            type="password"
            placeholder="Senha atual"
            icon={FiLock}
          />
          <Input
            name="password"
            type="password"
            placeholder="Nova senha"
            icon={FiLock}
          />
          <Input
            name="password_confirmation"
            type="password"
            placeholder="confirmação de senha"
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
