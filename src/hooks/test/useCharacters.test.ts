import { useCharacters, useCharacter } from "../useCharacters";
import { useQuery } from "@tanstack/react-query";
import * as characterService from "@/services/character.service";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("@/services/character.service");

describe("useCharacters hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls useQuery with correct config for useCharacters", () => {
    (useQuery as jest.Mock).mockReturnValue({ data: [] });

    useCharacters(2, "Rick");

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["characters", 2, "Rick"],
      queryFn: expect.any(Function),
      keepPreviousData: true,
    });
  });

  test("queryFn calls getCharacters with correct params", async () => {
    const mockGetCharacters = jest
      .spyOn(characterService, "getCharacters")
      .mockResolvedValue([]);

    let capturedQueryFn: any;

    (useQuery as jest.Mock).mockImplementation(({ queryFn }) => {
      capturedQueryFn = queryFn;
      return {};
    });

    useCharacters(3, "Morty");

    await capturedQueryFn();

    expect(mockGetCharacters).toHaveBeenCalledWith(3, "Morty");
  });
});

describe("useCharacter hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls useQuery with correct config for useCharacter", () => {
    (useQuery as jest.Mock).mockReturnValue({ data: {} });

    useCharacter("10");

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ["character", "10"],
      queryFn: expect.any(Function),
    });
  });

  test("queryFn calls getCharacterById with correct id", async () => {
    const mockGetCharacterById = jest
      .spyOn(characterService, "getCharacterById")
      .mockResolvedValue({});

    let capturedQueryFn: any;

    (useQuery as jest.Mock).mockImplementation(({ queryFn }) => {
      capturedQueryFn = queryFn;
      return {};
    });

    useCharacter("25");

    await capturedQueryFn();

    expect(mockGetCharacterById).toHaveBeenCalledWith("25");
  });
});
