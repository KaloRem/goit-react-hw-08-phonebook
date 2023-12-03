import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormWrapper, Label, Input, SubmitBtn } from './LoginForm.styled';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  // ----controlled form
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  // ----
  // ----form submit
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  // ----

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor={emailInputId}>Email</Label>
      <Input
        type="email"
        name="email"
        required
        id={emailInputId}
        value={email}
        onChange={handleChange}
      />
      <Label htmlFor={passwordInputId}>Password</Label>
      <Input
        type="password"
        name="password"
        required
        id={passwordInputId}
        value={password}
        onChange={handleChange}
      />
      <SubmitBtn type="submit">Log In</SubmitBtn>
    </FormWrapper>
  );
};
