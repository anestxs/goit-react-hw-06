import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const getContacts = () => {
    const savedContacts = window.localStorage.getItem("Contacts");
    return savedContacts !== null
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  };

  const [contacts, setContacts] = useState(getContacts);

  useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const onAdd = (values) => {
    const newContact = { ...values, id: nanoid() };
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const onDelete = (contactId) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm doSubmit={onAdd}></ContactForm>
      <SearchBox value={filter} onFilter={setFilter}></SearchBox>
      <ContactList contacts={visibleContacts} onDelete={onDelete}></ContactList>
    </div>
  );
}
