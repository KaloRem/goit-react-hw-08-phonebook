import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title, ContactsTitle, Error, Text } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactItems = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && !error && <Loader />}

      {contactItems.length > 0 ? (
        <ContactList />
      ) : (
        <Text>
          Your phonebook is empty. Add first contact!
        </Text>
      )}
      {error && <Error>Oops, sorry, something went wrong...</Error>}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Contacts;
