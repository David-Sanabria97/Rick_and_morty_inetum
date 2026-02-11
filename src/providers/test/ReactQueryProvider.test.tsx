import { render, screen } from "@testing-library/react";
import { useQueryClient } from "@tanstack/react-query";
import { ReactQueryProvider } from "../ReactQueryProvider";

function TestComponent() {
  const client = useQueryClient();
  return <div data-testid="client">{client ? "has-client" : "no-client"}</div>;
}

describe("ReactQueryProvider", () => {
  it("renders children", () => {
    render(
      <ReactQueryProvider>
        <div>Child content</div>
      </ReactQueryProvider>,
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("provides a QueryClient to children", () => {
    render(
      <ReactQueryProvider>
        <TestComponent />
      </ReactQueryProvider>,
    );

    expect(screen.getByTestId("client")).toHaveTextContent("has-client");
  });
});
