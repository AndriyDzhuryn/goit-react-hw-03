import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.listContacts}>
      {contacts.map((contact) => {
        return (
          <li className={css.listItemContacts} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
