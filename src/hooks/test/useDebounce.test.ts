import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("Rick"));

    expect(result.current).toBe("Rick");
  });

  it("does not update value before delay", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "Rick" } },
    );

    rerender({ value: "Morty" });

    // Avanzamos menos del delay
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(result.current).toBe("Rick");
  });

  it("updates value after delay", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "Rick" } },
    );

    rerender({ value: "Morty" });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("Morty");
  });

  it("clears previous timeout when value changes quickly", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "Rick" } },
    );

    rerender({ value: "Morty" });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Cambia antes de que termine el primer timeout
    rerender({ value: "Summer" });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("Summer");
  });
});
