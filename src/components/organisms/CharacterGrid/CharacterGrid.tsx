"use client";

import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { useCharacters } from "@/hooks/useCharacters";
import CharacterCard from "../CharacterCard/CharacterCard";

import styles from "./CharacterGrid.module.scss";
import Pagination from "@/components/molecules/Pagination/Pagination";

const CharacterGrid = () => {
  const search = useSelector((state: RootState) => state.search.value);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useCharacters(page, search);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div className={styles.grid}>
        {data?.results.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data?.info?.pages || 1}
        onChange={setPage}
      />
    </div>
  );
};
export default CharacterGrid;
