import { useQuery } from "@tanstack/react-query";
import { getCharacters, getCharacterById } from "@/services/character.service";

export function useCharacters(page: number, name: string) {
  return useQuery({
    queryKey: ["characters", page, name],
    queryFn: () => getCharacters(page, name),
    keepPreviousData: true,
  });
}

export function useCharacter(id: string) {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
  });
}
