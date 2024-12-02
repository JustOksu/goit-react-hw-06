import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
