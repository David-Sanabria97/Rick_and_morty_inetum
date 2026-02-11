import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRecent } from "@/store/recentSlice";
import { Character } from "@/types/character";
import Link from "next/link";

import styles from "./CharacterDetail.module.scss";

interface Props {
  character: Character;
}

export default function CharacterDetail({ character }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addRecent(character));
  }, [character, dispatch]);

  return (
    <div className={styles.container}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />

      <div>
        <h1 className={styles.name}>{character.name}</h1>
        <div className={styles.info}>
          <p>
            <span className={styles.label}>Status:</span> {character.status}
          </p>
          <p>
            <span className={styles.label}>Species:</span> {character.species}
          </p>
          <p>
            <span className={styles.label}>Gender:</span> {character.gender}
          </p>
          <p>
            <span className={styles.label}>Origin:</span>{" "}
            {character.origin.name}
          </p>
          <p>
            <span className={styles.label}>Location:</span>{" "}
            {character.location.name}
          </p>
        </div>

        <Link href="/" className={styles.back}>
          ← Volver al listado
        </Link>
      </div>
    </div>
  );
}
