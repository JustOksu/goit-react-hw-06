import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
