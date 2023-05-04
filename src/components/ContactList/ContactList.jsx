import { useState } from 'react';

import styles from './ContactList.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContacts, getFilter } from 'redux/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);

  const { isLoading, items } = useSelector(getContacts);

  const [{ page, pageLimit }, setPagination] = useState(() => ({
    page: 1,
    pageLimit: 10,
  }));

  const filteredContacts = items.filter(({ name, phone }) => {
    if (!filter) return true;

    const sanitizedFilter = filter.toLowerCase();
    const values = [`${name.toLowerCase()}:`, phone.toLowerCase()];

    return (
      values.some((value = '') => {
        return value.includes(sanitizedFilter);
      }) || values.join(' ').includes(sanitizedFilter)
    );
  });

  const paginatedItems = filteredContacts.slice(
    (page - 1) * pageLimit,
    page * pageLimit
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact_list}>
      {isLoading && <h1>Loading...</h1>}

      <ul>
        {paginatedItems.map(({ name, phone, id }) => (
          <li key={id}>
            {name}: {phone}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button
          onClick={() =>
            setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
          }
          disabled={page === 1}
        >
          Prev
        </button>

        <button
          onClick={() =>
            setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
          }
          disabled={page === Math.ceil(items.length / 10)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactList;
