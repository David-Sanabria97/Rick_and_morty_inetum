import { addRecentCharacter, getRecentCharacters } from "../useRecentlyViewed";

const KEY = "recent_characters";

describe("recentCharacters utils", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe("getRecentCharacters", () => {
    it("returns empty array if nothing in localStorage", () => {
      expect(getRecentCharacters()).toEqual([]);
    });

    it("returns parsed data from localStorage", () => {
      const mockData = [{ id: 1, name: "Rick" }];
      localStorage.setItem(KEY, JSON.stringify(mockData));

      expect(getRecentCharacters()).toEqual(mockData);
    });
  });

  describe("addRecentCharacter", () => {
    const character = { id: 1, name: "Rick" };

    it("adds character when storage is empty", () => {
      addRecentCharacter(character);

      const stored = getRecentCharacters();
      expect(stored).toEqual([character]);
    });

    it("adds character to the beginning", () => {
      localStorage.setItem(KEY, JSON.stringify([{ id: 2, name: "Morty" }]));

      addRecentCharacter(character);

      const stored = getRecentCharacters();
      expect(stored[0]).toEqual(character);
    });

    it("does not duplicate character and moves it to the top", () => {
      localStorage.setItem(
        KEY,
        JSON.stringify([
          { id: 1, name: "Rick" },
          { id: 2, name: "Morty" },
        ]),
      );

      addRecentCharacter(character);

      const stored = getRecentCharacters();

      expect(stored).toHaveLength(2);
      expect(stored[0].id).toBe(1);
    });

    it("keeps maximum of 5 characters", () => {
      const fiveCharacters = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
      ];

      localStorage.setItem(KEY, JSON.stringify(fiveCharacters));

      addRecentCharacter({ id: 6 });

      const stored = getRecentCharacters();

      expect(stored).toHaveLength(5);
      expect(stored[0].id).toBe(6);

      expect(stored.some((c: any) => c.id === 5)).toBe(false);
    });
  });
});
