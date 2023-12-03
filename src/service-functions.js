import { toast } from 'react-toastify';

export const checkName = (name, contacts) => {
  const normalizedName = name.toLowerCase();
  const foundName = contacts.find(
    contact => contact.name.toLowerCase() === normalizedName
  );
  if (foundName) {
    toast.warning(`${name} is already in contacts.`);
    return true;
  }
};
