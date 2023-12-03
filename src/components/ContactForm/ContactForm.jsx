import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormWrapper,
  NameLabel,
  NameInput,
  NumberLabel,
  NumberInput,
  SubmitBtn,
} from 'components/ContactForm/ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { checkName } from 'service-functions';

export const ContactForm = () => {
  // ----controlled form
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  // ----
  // ----form submit
  const contactItems = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    if (!checkName(name, contactItems)) {
      dispatch(addContact(contact));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  // ----

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameLabel htmlFor={nameInputId}>Name</NameLabel>
      <NameInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        id={nameInputId}
        onChange={handleChange}
      />
      <NumberLabel htmlFor={numberInputId}>Number</NumberLabel>
      <NumberInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberInputId}
        value={number}
        onChange={handleChange}
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormWrapper>
  );
};
