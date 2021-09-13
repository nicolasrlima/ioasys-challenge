import React from 'react';

import { useForm } from 'react-hook-form';

import { ReactComponent as IoasysLogoLight } from 'assets/ioasys-logo-light.svg';
import TextField from 'components/TextField/TextField';
import Tooltip from 'components/Tooltip/Tooltip';
import Typography from 'components/Typography/Typography';
import { useAuth } from 'contexts/AuthContext';
import api from 'services/api';

import { LoginContainer, LoginForm, LogoContainer } from './Styled';

interface FormInputs {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const { handleSubmit, register } = useForm<FormInputs>({
    mode: 'onChange'
  });
  const { authenticate } = useAuth();

  const [loginFailed, setLoginFailed] = React.useState(false);

  const submitLoginForm = async ({
    email,
    password
  }: FormInputs): Promise<void> => {
    try {
      const { data, headers } = await api.post('/auth/sign-in', {
        email,
        password
      });
      const refreshToken = headers['refresh-token'];
      const token = headers.authorization;

      authenticate({ refreshToken, token, user: data });
    } catch (error) {
      setLoginFailed(true);
    }
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <IoasysLogoLight />
        <Typography component="h1" color="white" variant="titleThin">
          Books
        </Typography>
      </LogoContainer>
      <LoginForm>
        <TextField
          label="Email"
          register={register('email', { required: true })}
        />
        <Tooltip active={loginFailed} content="Email e/ou senha incorretos.">
          <TextField
            button={{
              buttonText: 'Entrar',
              onButtonClick: handleSubmit(submitLoginForm)
            }}
            label="Senha"
            type="password"
            register={register('password', { required: true })}
          />
        </Tooltip>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
