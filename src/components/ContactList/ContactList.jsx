import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContact } from 'redux/selector';
import { deleteContact } from 'redux/contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContact);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactList}>
            {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
