"use client";

import { useParams } from "next/navigation";
import { useCharacter } from "@/hooks/useCharacters";

import CharacterDetail from "@/components/organisms/CharacterDetail/CharacterDetail";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useCharacter(id as string);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <main>
      <CharacterDetail character={data} />
    </main>
  );
}
