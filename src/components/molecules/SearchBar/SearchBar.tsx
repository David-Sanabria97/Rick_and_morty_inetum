import Input from "../../atoms/Input/Input";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ value, onChange }: any) => {
  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="Buscar personaje..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
