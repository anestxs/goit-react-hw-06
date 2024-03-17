import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useSelector } from "react-redux";

export default function App() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList contacts={visibleContacts}></ContactList>
    </div>
  );
}
