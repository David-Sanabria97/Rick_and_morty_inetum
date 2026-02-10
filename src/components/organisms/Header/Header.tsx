import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/store/search/searchSlice";
import { RootState } from "@/store/index";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import styles from "./Header.module.scss";

export default function Header() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.value);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Rick & Morty
        </Link>
        <SearchBar
          value={search}
          onChange={(value) => dispatch(setSearch(value))}
          placeholder="Search character..."
        />
      </div>
    </header>
  );
}
