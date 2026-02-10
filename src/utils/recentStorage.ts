import { Character } from "@/types/character";

const KEY = "recent_characters";

export const saveRecent = (items: Character[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
};

export const loadRecent = (): Character[] => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
