/********************************************************** src/LoginForm.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #cfcfcf 10%, #9e9e9e 100%);
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 60px 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  color: white;
  margin-bottom: ${(props) => props.theme.spacing.margin};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.padding};
  margin: ${(props) => props.theme.spacing.margin};
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 2px solid ${(props) => (props.hasValue ? props.theme.colors.button.filled : props.theme.colors.input.border)};
  border-radius: ${(props) => props.theme.borders.radius};
  &:focus {
    border-color: ${(props) => props.theme.colors.input.focus};
    outline: none;
    box-shadow: 0 0 5px ${(props) => props.theme.colors.input.focus};
  }
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.padding};
  margin: ${(props) => props.theme.spacing.margin};
  background-color: ${(props) => props.theme.colors.button.default};
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  border-radius: ${(props) => props.theme.borders.radius};
  font-size: 1em;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => (props.isFilled ? props.theme.colors.button.filled : props.theme.colors.button.hover)};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.button.disabled};
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  color: red; //Changed the error message color to red 
  font-size: 0.9em;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const SuccessMsg = styled.p`
  color: green;
  font-size: 1em;
  margin-top: 20px;
`;

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const minLength = 8;
  const hasNumber = /\d/;
  const hasSpecialChar = /[!@#$%^&*]/;
  return password.length >= minLength && hasNumber.test(password) && hasSpecialChar.test(password);
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (formSubmitted) validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (formSubmitted) validateForm();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (!validateEmail(username)) {
      newErrors.username = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain a number and a special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (validateForm()) {
      if (username === 'test@example.com' && password === 'Test@1234') {
        setLoginSuccess(true);
        setErrors({});
        setFormSubmitted(false);
        setUsername('');
        setPassword('');
      } else {
        setLoginSuccess(false);
        setErrors({ form: 'Invalid username or password' });
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header>
          <Heading>Login Form</Heading>
        </Header>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Username (Email)"
              value={username}
              onChange={handleUsernameChange}
              hasValue={username}
            />
            {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              hasValue={password}
            />
            {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
            <Button type="submit" isFilled={username && password}>Login</Button>
            {errors.form && <ErrorMsg>{errors.form}</ErrorMsg>}
            {loginSuccess && <SuccessMsg>Login successful!</SuccessMsg>}
          </Form>
        </FormContainer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default LoginForm;

************************************************************/

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #cfcfcf 10%, #9e9e9e 100%);
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 60px 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  color: white;
  margin-bottom: ${(props) => props.theme.spacing.margin};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.padding};
  margin: ${(props) => props.theme.spacing.margin};
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 2px solid ${(props) => (props.hasValue ? props.theme.colors.button.filled : props.theme.colors.input.border)};
  border-radius: ${(props) => props.theme.borders.radius};
  &:focus {
    border-color: ${(props) => props.theme.colors.input.focus};
    outline: none;
    box-shadow: 0 0 5px ${(props) => props.theme.colors.input.focus};
  }
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.padding};
  margin: ${(props) => props.theme.spacing.margin};
  background-color: ${(props) => props.theme.colors.button.default};
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  border-radius: ${(props) => props.theme.borders.radius};
  font-size: 1em;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => (props.isFilled ? props.theme.colors.button.filled : props.theme.colors.button.hover)};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.button.disabled};
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const SuccessMsg = styled.p`
  color: green;
  font-size: 1em;
  margin-top: 20px;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.button.default};
  cursor: pointer;
  margin-top: ${(props) => props.theme.spacing.margin};
  &:hover {
    text-decoration: underline;
  }
`;

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const minLength = 8;
  const hasNumber = /\d/;
  const hasSpecialChar = /[!@#$%^&*]/;
  return password.length >= minLength && hasNumber.test(password) && hasSpecialChar.test(password);
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [view, setView] = useState('login'); // 'login', 'forgotPassword', 'createAccount'

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (formSubmitted) validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (formSubmitted) validateForm();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (!validateEmail(username)) {
      newErrors.username = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain a number and a special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (validateForm()) {
      if (username === 'test@example.com' && password === 'Test@1234') {
        setLoginSuccess(true);
        setErrors({});
        setFormSubmitted(false);
        setUsername('');
        setPassword('');
      } else {
        setLoginSuccess(false);
        setErrors({ form: 'Invalid username or password' });
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (validateEmail(username)) {
      console.log('Password reset link sent to:', username);
      setErrors({});
      setFormSubmitted(false);
      setView('login');
    } else {
      setErrors({ username: 'Please enter a valid email address' });
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (validateForm()) {
      console.log('Account created for:', { username, password });
      setErrors({});
      setFormSubmitted(false);
      setUsername('');
      setPassword('');
      setView('login');
    }
  };

  const renderLoginForm = () => (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Username (Email)"
        value={username}
        onChange={handleUsernameChange}
        hasValue={username}
      />
      {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        hasValue={password}
      />
      {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
      <Button type="submit" isFilled={username && password}>Login</Button>
      {errors.form && <ErrorMsg>{errors.form}</ErrorMsg>}
      {loginSuccess && <SuccessMsg>Login successful!</SuccessMsg>}
      <LinkButton onClick={() => setView('forgotPassword')}>Forgot Password?</LinkButton>
      <LinkButton onClick={() => setView('createAccount')}>Create Account</LinkButton>
    </Form>
  );

  const renderForgotPasswordForm = () => (
    <Form onSubmit={handleForgotPassword}>
      <Input
        type="text"
        placeholder="Enter your email"
        value={username}
        onChange={handleUsernameChange}
        hasValue={username}
      />
      {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
      <Button type="submit" isFilled={username}>Send Reset Link</Button>
      <LinkButton onClick={() => setView('login')}>Back to Login</LinkButton>
    </Form>
  );

  const renderCreateAccountForm = () => (
    <Form onSubmit={handleCreateAccount}>
      <Input
        type="text"
        placeholder="Username (Email)"
        value={username}
        onChange={handleUsernameChange}
        hasValue={username}
      />
      {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        hasValue={password}
      />
      {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
      <Button type="submit" isFilled={username && password}>Create Account</Button>
      <LinkButton onClick={() => setView('login')}>Back to Login</LinkButton>
    </Form>
  );

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header>
          <Heading>Login Form</Heading>
        </Header>
        <FormContainer>
          {view === 'login' && renderLoginForm()}
          {view === 'forgotPassword' && renderForgotPasswordForm()}
          {view === 'createAccount' && renderCreateAccountForm()}
        </FormContainer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default LoginForm;

