import { render, screen } from "@testing-library/react";
import { ReduxProvider } from "../ReduxProvider";
import * as recentStorage from "@/utils/recentStorage";
import { store } from "@/store";
import { setRecent } from "@/store/recentSlice";

describe("ReduxProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children", () => {
    render(
      <ReduxProvider>
        <div>Redux Child</div>
      </ReduxProvider>,
    );

    expect(screen.getByText("Redux Child")).toBeInTheDocument();
  });

  it("loads recent items and dispatches setRecent on mount", () => {
    const mockRecent = [{ id: 1, name: "Rick" }];

    const loadRecentSpy = jest
      .spyOn(recentStorage, "loadRecent")
      .mockReturnValue(mockRecent);

    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <ReduxProvider>
        <div />
      </ReduxProvider>,
    );

    expect(loadRecentSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith(setRecent(mockRecent));
  });
});
