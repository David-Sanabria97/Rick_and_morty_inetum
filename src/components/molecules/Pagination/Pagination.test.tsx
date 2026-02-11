import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const setup = (props = {}) => {
    const onChange = jest.fn();

    render(
      <Pagination
        currentPage={3}
        totalPages={10}
        onChange={onChange}
        {...props}
      />,
    );

    return { onChange };
  };

  test("renders page numbers around the current page", () => {
    setup();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("calls onChange when a page number is clicked", () => {
    const { onChange } = setup();

    fireEvent.click(screen.getByText("4"));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  test("disables previous buttons on first page", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={1} totalPages={10} onChange={onChange} />);

    expect(screen.getByText("‹ Prev")).toBeDisabled();
    expect(screen.getByLabelText("First page")).toBeDisabled();
  });

  test("disables next buttons on last page", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={10} totalPages={10} onChange={onChange} />);

    expect(screen.getByText("Next ›")).toBeDisabled();
    expect(screen.getByText("»")).toBeDisabled();
  });

  test("renders ellipsis on both sides when pages are truncated", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={5} totalPages={10} onChange={onChange} />);

    expect(screen.getAllByText("…")).toHaveLength(2);
  });

  test("calls onChange with page 1 when clicking first button", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={3} totalPages={10} onChange={onChange} />);

    fireEvent.click(screen.getByLabelText("First page"));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  test("calls onChange with previous page", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={3} totalPages={10} onChange={onChange} />);

    fireEvent.click(screen.getByText("‹ Prev"));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  test("calls onChange with next page", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={3} totalPages={10} onChange={onChange} />);

    fireEvent.click(screen.getByText("Next ›"));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  test("calls onChange with last page", () => {
    const onChange = jest.fn();

    render(<Pagination currentPage={3} totalPages={10} onChange={onChange} />);

    fireEvent.click(screen.getByText("»"));
    expect(onChange).toHaveBeenCalledWith(10);
  });
});
