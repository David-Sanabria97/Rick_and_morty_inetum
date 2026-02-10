const API_URL = "https://rickandmortyapi.com/api";

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export async function getCharacters(
  page = 1,
  name = "",
): Promise<CharactersResponse> {
  const params = new URLSearchParams({
    page: String(page),
    ...(name && { name }),
  });

  const res = await fetch(`${API_URL}/character?${params}`);

  if (!res.ok) {
    throw new Error("Error fetching characters");
  }

  return res.json();
}

export async function getCharacterById(id: string) {
  const res = await fetch(`${API_URL}/character/${id}`);
  if (!res.ok) throw new Error("Error fetching character");
  return res.json();
}
