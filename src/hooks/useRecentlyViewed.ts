const KEY = "recent_characters";

export function addRecentCharacter(character: any) {
  const stored = JSON.parse(localStorage.getItem(KEY) || "[]");

  const filtered = stored.filter((c: any) => c.id !== character.id);
  const updated = [character, ...filtered].slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function getRecentCharacters() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}
