import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import Providers from "../utils/Providers";

describe("Home tests:", () => {
  test("Search input should be visible", () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );

    const searchInput = screen
      .getByTestId("search-input")
      .querySelector("input");
    expect(searchInput).toBeInTheDocument();

    expect(screen.getByTestId("home-data-not-found")).toBeInTheDocument();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.change(searchInput!, { target: { value: "some text" } });
    expect(searchInput?.value).toBe("some text");
  });

  test("Data should show after type something to search input", async () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );

    const searchInput = screen
      .getByTestId("search-input")
      .querySelector("input");

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.change(searchInput!, { target: { value: "breaking" } });
    await waitFor(() => screen.getByTestId("home-data-box"));

    expect(screen.getByTestId("home-data-box")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-name")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-language")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-genred")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-type")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-status")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-premiered")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-ended")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-rating")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-summary")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-image")).toBeInTheDocument();
    expect(screen.getByTestId("home-data-url")).toBeInTheDocument();
  });
});
