import Link from "next/link";
import styles from "./CharacterCard.module.scss";

interface Props {
  id: number;
  name: string;
  image: string;
  status: string;
}

export default function CharacterCard({ id, name, image, status }: Props) {
  return (
    <Link href={`/character/${id}`} className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.status}>{status}</p>
      </div>
    </Link>
  );
}
