import { useSelector } from 'react-redux';
import {
  ContactsWrapper,
  ContactsList,
  ContactsListItem,
} from 'components/ContactList/ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ContactsWrapper>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ContactsListItem key={contact.id}>
            <Contact contact={contact} />
          </ContactsListItem>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};
