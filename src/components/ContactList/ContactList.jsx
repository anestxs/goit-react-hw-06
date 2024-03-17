import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css["list-item"]} key={contact.id}>
            <Contact contact={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
