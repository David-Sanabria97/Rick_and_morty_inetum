import { useSelector } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";

import styles from "./RecentCharacters.module.scss";
const RecentCharacters = () => {
  const recents = useSelector((state: RootState) => state.recent.items);

  console.log("Recents from store:", recents);
  return (
    <div>
      <h2 className={styles.title}>Recently Viewed</h2>
      <div className={styles.grid}>
        {recents.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default RecentCharacters;
