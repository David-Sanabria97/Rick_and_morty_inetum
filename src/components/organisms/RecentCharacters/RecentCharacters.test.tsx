import { render, screen } from "@testing-library/react";
import RecentCharacters from "./RecentCharacters";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../CharacterCard/CharacterCard", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="character-card">{props.name}</div>,
}));

describe("RecentCharacters", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders title", () => {
    (useSelector as jest.Mock).mockReturnValue([]);

    render(<RecentCharacters />);

    expect(screen.getByText("Recently Viewed")).toBeInTheDocument();
  });

  it("renders character cards from redux state", () => {
    const mockCharacters = [
      { id: 1, name: "Rick" },
      { id: 2, name: "Morty" },
    ];

    (useSelector as jest.Mock).mockReturnValue(mockCharacters);

    render(<RecentCharacters />);

    const cards = screen.getAllByTestId("character-card");

    expect(cards).toHaveLength(2);
    expect(screen.getByText("Rick")).toBeInTheDocument();
    expect(screen.getByText("Morty")).toBeInTheDocument();
  });

  it("renders empty grid when no recents", () => {
    (useSelector as jest.Mock).mockReturnValue([]);

    render(<RecentCharacters />);

    expect(screen.queryAllByTestId("character-card")).toHaveLength(0);
  });
});
