import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  return (
    <>
      <div>
        <ContactForm />

        <Filter />
        <ContactList />
      </div>
    </>
  );
};
