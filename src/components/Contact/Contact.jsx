import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Deleting contact with id:", id);
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <p>Name: {name}</p>
        <p>Phone: {number}</p>
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
