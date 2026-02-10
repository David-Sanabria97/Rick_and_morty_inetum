"use client";

import { useCharacters } from "@/hooks/useCharacters";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterGrid.module.scss";

const CharacterGrid = ({ page, name }: any) => {
  const { data } = useCharacters(page, name);

  return (
    <div className={styles.grid}>
      {data?.results.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </div>
  );
};
export default CharacterGrid;
