import { render, screen } from "@testing-library/react";
import Providers from "../utils/Providers";
import ShowDetails from "./ShowDetails";

describe("ShowDetails tests:", () => {
  test("Show details should not be visible", () => {
    render(
      <Providers>
        <ShowDetails />
      </Providers>
    );

    expect(screen.getByTestId("show-details-not-found")).toBeInTheDocument();
  });
});
