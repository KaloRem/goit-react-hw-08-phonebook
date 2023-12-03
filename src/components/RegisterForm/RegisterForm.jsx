import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormWrapper, Label, Input, SubmitBtn } from './RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  // ----controlled form
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  // ----

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        id={nameInputId}
        onChange={handleChange}
      />
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
      <SubmitBtn type="submit">Register</SubmitBtn>
    </FormWrapper>
  );
};
