import CharacterList from "@/components/organisms/CharacterGrid/CharacterGrid";

export default function HomePage() {
  return (
    <main>
      <h1>Rick and Morty Characters</h1>
      <CharacterList page={1} name="" />
    </main>
  );
}
