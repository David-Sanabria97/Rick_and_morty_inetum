import {
  getCharacters,
  getCharacterById,
  CharactersResponse,
} from "./character.service";

global.fetch = jest.fn();

describe("character.service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getCharacters", () => {
    const mockResponse: CharactersResponse = {
      info: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          image: "image.jpg",
          status: "Alive",
          species: "Human",
        },
      ],
    };

    it("calls fetch with correct page", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      await getCharacters(2);

      expect(fetch).toHaveBeenCalledWith(
        "https://rickandmortyapi.com/api/character?page=2",
      );
    });

    it("adds name param when provided", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      await getCharacters(1, "Rick");

      expect(fetch).toHaveBeenCalledWith(
        "https://rickandmortyapi.com/api/character?page=1&name=Rick",
      );
    });

    it("returns data when response is ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await getCharacters();

      expect(result).toEqual(mockResponse);
    });

    it("throws error when response is not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
      });

      await expect(getCharacters()).rejects.toThrow(
        "Error fetching characters",
      );
    });
  });

  describe("getCharacterById", () => {
    const mockCharacter = {
      id: 1,
      name: "Rick Sanchez",
    };

    it("calls fetch with correct id", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockCharacter,
      });

      await getCharacterById("1");

      expect(fetch).toHaveBeenCalledWith(
        "https://rickandmortyapi.com/api/character/1",
      );
    });

    it("returns data when ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockCharacter,
      });

      const result = await getCharacterById("1");

      expect(result).toEqual(mockCharacter);
    });

    it("throws error when not ok", async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
      });

      await expect(getCharacterById("1")).rejects.toThrow(
        "Error fetching character",
      );
    });
  });
});
