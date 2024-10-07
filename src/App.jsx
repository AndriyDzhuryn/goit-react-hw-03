import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

import css from "./App.module.css";

import preliminaryListContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts =
      JSON.parse(stringifiedContacts) ?? preliminaryListContacts;
    return parsedContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const addContact = (newContact) => {
    setContacts(() => [...contacts, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = (id) => {
    setContacts((newListContacts) => {
      return newListContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
