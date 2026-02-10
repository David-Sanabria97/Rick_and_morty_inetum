"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { useCharacters } from "@/hooks/useCharacters";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterGrid.module.scss";

const CharacterGrid = ({ page }: any) => {
  const search = useSelector((state: RootState) => state.search.value);
  const { data, isLoading, isError } = useCharacters(page, search);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className={styles.grid}>
      {data?.results.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </div>
  );
};
export default CharacterGrid;
